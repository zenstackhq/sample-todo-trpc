/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import { UserSchema } from '../schemas/User.schema';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        aggregate: procedure.input(UserSchema.aggregate).query(({ ctx, input }) => db(ctx).user.aggregate(input)),

        createMany: procedure.input(UserSchema.createMany).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).user.createMany(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        create: procedure.input(UserSchema.create).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).user.create(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        deleteMany: procedure.input(UserSchema.deleteMany).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).user.deleteMany(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        delete: procedure.input(UserSchema.delete).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).user.delete(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        findFirst: procedure.input(UserSchema.findFirst).query(({ ctx, input }) => db(ctx).user.findFirst(input)),

        findFirstOrThrow: procedure.input(UserSchema.findFirst).query(({ ctx, input }) => db(ctx).user.findFirstOrThrow(input)),

        findMany: procedure.input(UserSchema.findMany).query(({ ctx, input }) => db(ctx).user.findMany(input)),

        findUnique: procedure.input(UserSchema.findUnique).query(({ ctx, input }) => db(ctx).user.findUnique(input)),

        findUniqueOrThrow: procedure.input(UserSchema.findUnique).query(({ ctx, input }) => db(ctx).user.findUniqueOrThrow(input)),

        groupBy: procedure.input(UserSchema.groupBy).query(({ ctx, input }) => db(ctx).user.groupBy(input)),

        updateMany: procedure.input(UserSchema.updateMany).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).user.updateMany(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        update: procedure.input(UserSchema.update).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).user.update(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        upsert: procedure.input(UserSchema.upsert).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).user.upsert(input);
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
