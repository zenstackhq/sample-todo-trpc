/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import { AccountSchema } from '../schemas/Account.schema';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        aggregate: procedure.input(AccountSchema.aggregate).query(({ ctx, input }) => db(ctx).account.aggregate(input)),

        createMany: procedure.input(AccountSchema.createMany).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).account.createMany(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        create: procedure.input(AccountSchema.create).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).account.create(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        deleteMany: procedure.input(AccountSchema.deleteMany).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).account.deleteMany(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        delete: procedure.input(AccountSchema.delete).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).account.delete(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        findFirst: procedure.input(AccountSchema.findFirst).query(({ ctx, input }) => db(ctx).account.findFirst(input)),

        findFirstOrThrow: procedure.input(AccountSchema.findFirst).query(({ ctx, input }) => db(ctx).account.findFirstOrThrow(input)),

        findMany: procedure.input(AccountSchema.findMany).query(({ ctx, input }) => db(ctx).account.findMany(input)),

        findUnique: procedure.input(AccountSchema.findUnique).query(({ ctx, input }) => db(ctx).account.findUnique(input)),

        findUniqueOrThrow: procedure.input(AccountSchema.findUnique).query(({ ctx, input }) => db(ctx).account.findUniqueOrThrow(input)),

        groupBy: procedure.input(AccountSchema.groupBy).query(({ ctx, input }) => db(ctx).account.groupBy(input)),

        updateMany: procedure.input(AccountSchema.updateMany).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).account.updateMany(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        update: procedure.input(AccountSchema.update).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).account.update(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        upsert: procedure.input(AccountSchema.upsert).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).account.upsert(input);
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
