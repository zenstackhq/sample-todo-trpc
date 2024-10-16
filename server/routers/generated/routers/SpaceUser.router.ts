/* eslint-disable */
import { db } from ".";
import { createTRPCRouter } from "../../_app";
import { procedure } from "../../_app";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';

export default function createRouter() {
    return createTRPCRouter({

        aggregate: procedure.input($Schema.SpaceUserInputSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).spaceUser.aggregate(input as any))),

        createMany: procedure.input($Schema.SpaceUserInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).spaceUser.createMany(input as any))),

        create: procedure.input($Schema.SpaceUserInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).spaceUser.create(input as any))),

        deleteMany: procedure.input($Schema.SpaceUserInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).spaceUser.deleteMany(input as any))),

        delete: procedure.input($Schema.SpaceUserInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).spaceUser.delete(input as any))),

        findFirst: procedure.input($Schema.SpaceUserInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).spaceUser.findFirst(input as any))),

        findFirstOrThrow: procedure.input($Schema.SpaceUserInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).spaceUser.findFirstOrThrow(input as any))),

        findMany: procedure.input($Schema.SpaceUserInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).spaceUser.findMany(input as any))),

        findUnique: procedure.input($Schema.SpaceUserInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).spaceUser.findUnique(input as any))),

        findUniqueOrThrow: procedure.input($Schema.SpaceUserInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).spaceUser.findUniqueOrThrow(input as any))),

        groupBy: procedure.input($Schema.SpaceUserInputSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).spaceUser.groupBy(input as any))),

        updateMany: procedure.input($Schema.SpaceUserInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).spaceUser.updateMany(input as any))),

        update: procedure.input($Schema.SpaceUserInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).spaceUser.update(input as any))),

        upsert: procedure.input($Schema.SpaceUserInputSchema.upsert).mutation(async ({ ctx, input }) => checkMutate(db(ctx).spaceUser.upsert(input as any))),

        count: procedure.input($Schema.SpaceUserInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).spaceUser.count(input as any))),

    }
    );
}
