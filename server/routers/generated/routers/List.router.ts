/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import { ListSchema } from '../schemas/List.schema';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        aggregate: procedure.input(ListSchema.aggregate).query(({ ctx, input }) => db(ctx).list.aggregate(input)),

        createMany: procedure.input(ListSchema.createMany).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).list.createMany(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        create: procedure.input(ListSchema.create).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).list.create(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        deleteMany: procedure.input(ListSchema.deleteMany).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).list.deleteMany(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        delete: procedure.input(ListSchema.delete).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).list.delete(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        findFirst: procedure.input(ListSchema.findFirst).query(({ ctx, input }) => db(ctx).list.findFirst(input)),

        findFirstOrThrow: procedure.input(ListSchema.findFirst).query(({ ctx, input }) => db(ctx).list.findFirstOrThrow(input)),

        findMany: procedure.input(ListSchema.findMany).query(({ ctx, input }) => db(ctx).list.findMany(input)),

        findUnique: procedure.input(ListSchema.findUnique).query(({ ctx, input }) => db(ctx).list.findUnique(input)),

        findUniqueOrThrow: procedure.input(ListSchema.findUnique).query(({ ctx, input }) => db(ctx).list.findUniqueOrThrow(input)),

        groupBy: procedure.input(ListSchema.groupBy).query(({ ctx, input }) => db(ctx).list.groupBy(input)),

        updateMany: procedure.input(ListSchema.updateMany).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).list.updateMany(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        update: procedure.input(ListSchema.update).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).list.update(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        upsert: procedure.input(ListSchema.upsert).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).list.upsert(input);
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
