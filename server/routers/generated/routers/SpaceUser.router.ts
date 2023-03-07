/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import { SpaceUserSchema } from '../schemas/SpaceUser.schema';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        aggregate: procedure.input(SpaceUserSchema.aggregate).query(({ ctx, input }) => db(ctx).spaceUser.aggregate(input)),

        createMany: procedure.input(SpaceUserSchema.createMany).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).spaceUser.createMany(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        create: procedure.input(SpaceUserSchema.create).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).spaceUser.create(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        deleteMany: procedure.input(SpaceUserSchema.deleteMany).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).spaceUser.deleteMany(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        delete: procedure.input(SpaceUserSchema.delete).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).spaceUser.delete(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        findFirst: procedure.input(SpaceUserSchema.findFirst).query(({ ctx, input }) => db(ctx).spaceUser.findFirst(input)),

        findFirstOrThrow: procedure.input(SpaceUserSchema.findFirst).query(({ ctx, input }) => db(ctx).spaceUser.findFirstOrThrow(input)),

        findMany: procedure.input(SpaceUserSchema.findMany).query(({ ctx, input }) => db(ctx).spaceUser.findMany(input)),

        findUnique: procedure.input(SpaceUserSchema.findUnique).query(({ ctx, input }) => db(ctx).spaceUser.findUnique(input)),

        findUniqueOrThrow: procedure.input(SpaceUserSchema.findUnique).query(({ ctx, input }) => db(ctx).spaceUser.findUniqueOrThrow(input)),

        groupBy: procedure.input(SpaceUserSchema.groupBy).query(({ ctx, input }) => db(ctx).spaceUser.groupBy(input)),

        updateMany: procedure.input(SpaceUserSchema.updateMany).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).spaceUser.updateMany(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        update: procedure.input(SpaceUserSchema.update).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).spaceUser.update(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        upsert: procedure.input(SpaceUserSchema.upsert).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).spaceUser.upsert(input);
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
