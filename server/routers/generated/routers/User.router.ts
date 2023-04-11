/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import { UserSchema } from '../schemas/User.schema';
import { checkRead, checkMutate } from '../helper';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        aggregate: procedure.input(UserSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).user.aggregate(input))),

        createMany: procedure.input(UserSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.createMany(input))),

        create: procedure.input(UserSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.create(input))),

        deleteMany: procedure.input(UserSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.deleteMany(input))),

        delete: procedure.input(UserSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.delete(input))),

        findFirst: procedure.input(UserSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).user.findFirst(input))),

        findFirstOrThrow: procedure.input(UserSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).user.findFirstOrThrow(input))),

        findMany: procedure.input(UserSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).user.findMany(input))),

        findUnique: procedure.input(UserSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).user.findUnique(input))),

        findUniqueOrThrow: procedure.input(UserSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).user.findUniqueOrThrow(input))),

        groupBy: procedure.input(UserSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).user.groupBy(input))),

        updateMany: procedure.input(UserSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.updateMany(input))),

        update: procedure.input(UserSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.update(input))),

        upsert: procedure.input(UserSchema.upsert).mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.upsert(input))),

    }
    );
}
