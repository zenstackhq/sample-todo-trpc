import { Prisma } from '@prisma/client';
import { TRPCError, initTRPC } from '@trpc/server';
import { isPrismaClientKnownRequestError } from '@zenstackhq/runtime';
import superjson from 'superjson';
import { type Context } from '../context';
import { createRouter as createCRUDRouter } from './generated/routers';

function makePrismaError(error: Error | undefined) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        return {
            clientVersion: error.clientVersion,
            code: error.code,
            message: error.message,
        };
    } else if (error instanceof Prisma.PrismaClientUnknownRequestError) {
        return {
            clientVersion: error.clientVersion,
            message: error.message,
        };
    } else if (error instanceof Prisma.PrismaClientValidationError) {
        return {
            message: error.message,
        };
    }
    return undefined;
}

const t = initTRPC.context<Context>().create({
    transformer: superjson,
    errorFormatter({ shape, error }) {
        return {
            ...shape,
            data: {
                ...shape.data,
                prismaError: makePrismaError(error.cause),
            },
        };
    },
});

// middleware for wrapping access denied errors from enhanced Prisma
// to proper TRPC errors with 403 code
const errorWrappedProc = t.procedure.use(async ({ next }) => {
    const result = await next();
    if (
        !result.ok &&
        isPrismaClientKnownRequestError(result.error.cause) &&
        result.error.cause.code === 'P2004' // access denied
    ) {
        return {
            ...result,
            error: new TRPCError({
                code: 'FORBIDDEN',
                message: result.error.cause.message,
                cause: result.error.cause,
            }),
        };
    } else {
        return result;
    }
});

export const appRouter = createCRUDRouter(t.router, errorWrappedProc);

export type AppRouter = typeof appRouter;
