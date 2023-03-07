/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import { SpaceSchema } from '../schemas/Space.schema';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        aggregate: procedure.input(SpaceSchema.aggregate).query(({ ctx, input }) => db(ctx).space.aggregate(input)),

        createMany: procedure.input(SpaceSchema.createMany).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).space.createMany(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        create: procedure.input(SpaceSchema.create).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).space.create(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        deleteMany: procedure.input(SpaceSchema.deleteMany).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).space.deleteMany(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        delete: procedure.input(SpaceSchema.delete).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).space.delete(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        findFirst: procedure.input(SpaceSchema.findFirst).query(({ ctx, input }) => db(ctx).space.findFirst(input)),

        findFirstOrThrow: procedure.input(SpaceSchema.findFirst).query(({ ctx, input }) => db(ctx).space.findFirstOrThrow(input)),

        findMany: procedure.input(SpaceSchema.findMany).query(({ ctx, input }) => db(ctx).space.findMany(input)),

        findUnique: procedure.input(SpaceSchema.findUnique).query(({ ctx, input }) => db(ctx).space.findUnique(input)),

        findUniqueOrThrow: procedure.input(SpaceSchema.findUnique).query(({ ctx, input }) => db(ctx).space.findUniqueOrThrow(input)),

        groupBy: procedure.input(SpaceSchema.groupBy).query(({ ctx, input }) => db(ctx).space.groupBy(input)),

        updateMany: procedure.input(SpaceSchema.updateMany).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).space.updateMany(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        update: procedure.input(SpaceSchema.update).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).space.update(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        upsert: procedure.input(SpaceSchema.upsert).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).space.upsert(input);
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
