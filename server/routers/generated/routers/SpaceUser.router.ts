/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from '.';
import { SpaceUserSchema } from '../schemas/SpaceUser.schema';
import { checkRead, checkMutate } from '../helper';

export default function createRouter<Config extends BaseConfig>(
    router: RouterFactory<Config>,
    procedure: ProcBuilder<Config>,
) {
    return router({
        aggregate: procedure
            .input(SpaceUserSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).spaceUser.aggregate(input))),

        createMany: procedure
            .input(SpaceUserSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).spaceUser.createMany(input))),

        create: procedure
            .input(SpaceUserSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).spaceUser.create(input))),

        deleteMany: procedure
            .input(SpaceUserSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).spaceUser.deleteMany(input))),

        delete: procedure
            .input(SpaceUserSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).spaceUser.delete(input))),

        findFirst: procedure
            .input(SpaceUserSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).spaceUser.findFirst(input))),

        findFirstOrThrow: procedure
            .input(SpaceUserSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).spaceUser.findFirstOrThrow(input))),

        findMany: procedure
            .input(SpaceUserSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).spaceUser.findMany(input))),

        findUnique: procedure
            .input(SpaceUserSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).spaceUser.findUnique(input))),

        findUniqueOrThrow: procedure
            .input(SpaceUserSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).spaceUser.findUniqueOrThrow(input))),

        groupBy: procedure
            .input(SpaceUserSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).spaceUser.groupBy(input))),

        updateMany: procedure
            .input(SpaceUserSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).spaceUser.updateMany(input))),

        update: procedure
            .input(SpaceUserSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).spaceUser.update(input))),

        upsert: procedure
            .input(SpaceUserSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).spaceUser.upsert(input))),
    });
}
