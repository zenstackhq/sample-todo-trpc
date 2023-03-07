/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import { TodoSchema } from '../schemas/Todo.schema';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        aggregate: procedure.input(TodoSchema.aggregate).query(({ ctx, input }) => db(ctx).todo.aggregate(input)),

        createMany: procedure.input(TodoSchema.createMany).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).todo.createMany(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        create: procedure.input(TodoSchema.create).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).todo.create(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        deleteMany: procedure.input(TodoSchema.deleteMany).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).todo.deleteMany(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        delete: procedure.input(TodoSchema.delete).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).todo.delete(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        findFirst: procedure.input(TodoSchema.findFirst).query(({ ctx, input }) => db(ctx).todo.findFirst(input)),

        findFirstOrThrow: procedure.input(TodoSchema.findFirst).query(({ ctx, input }) => db(ctx).todo.findFirstOrThrow(input)),

        findMany: procedure.input(TodoSchema.findMany).query(({ ctx, input }) => db(ctx).todo.findMany(input)),

        findUnique: procedure.input(TodoSchema.findUnique).query(({ ctx, input }) => db(ctx).todo.findUnique(input)),

        findUniqueOrThrow: procedure.input(TodoSchema.findUnique).query(({ ctx, input }) => db(ctx).todo.findUniqueOrThrow(input)),

        groupBy: procedure.input(TodoSchema.groupBy).query(({ ctx, input }) => db(ctx).todo.groupBy(input)),

        updateMany: procedure.input(TodoSchema.updateMany).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).todo.updateMany(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        update: procedure.input(TodoSchema.update).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).todo.update(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        upsert: procedure.input(TodoSchema.upsert).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).todo.upsert(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

    }
    );
}
