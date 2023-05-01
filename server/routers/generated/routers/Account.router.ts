/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from '.';
import { AccountSchema } from '../schemas/Account.schema';
import { checkRead, checkMutate } from '../helper';

export default function createRouter<Config extends BaseConfig>(
    router: RouterFactory<Config>,
    procedure: ProcBuilder<Config>,
) {
    return router({
        aggregate: procedure
            .input(AccountSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).account.aggregate(input))),

        createMany: procedure
            .input(AccountSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.createMany(input))),

        create: procedure
            .input(AccountSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.create(input))),

        deleteMany: procedure
            .input(AccountSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.deleteMany(input))),

        delete: procedure
            .input(AccountSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.delete(input))),

        findFirst: procedure
            .input(AccountSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).account.findFirst(input))),

        findFirstOrThrow: procedure
            .input(AccountSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).account.findFirstOrThrow(input))),

        findMany: procedure
            .input(AccountSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).account.findMany(input))),

        findUnique: procedure
            .input(AccountSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).account.findUnique(input))),

        findUniqueOrThrow: procedure
            .input(AccountSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).account.findUniqueOrThrow(input))),

        groupBy: procedure
            .input(AccountSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).account.groupBy(input))),

        updateMany: procedure
            .input(AccountSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.updateMany(input))),

        update: procedure
            .input(AccountSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.update(input))),

        upsert: procedure
            .input(AccountSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).account.upsert(input))),
    });
}
