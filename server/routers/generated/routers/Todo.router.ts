/* eslint-disable */
import { db } from ".";
import { createTRPCRouter } from "../../_app";
import { procedure } from "../../_app";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';

export default function createRouter() {
    return createTRPCRouter({

        aggregate: procedure.input($Schema.TodoInputSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).todo.aggregate(input as any))),

        createMany: procedure.input($Schema.TodoInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).todo.createMany(input as any))),

        create: procedure.input($Schema.TodoInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).todo.create(input as any))),

        deleteMany: procedure.input($Schema.TodoInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).todo.deleteMany(input as any))),

        delete: procedure.input($Schema.TodoInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).todo.delete(input as any))),

        findFirst: procedure.input($Schema.TodoInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).todo.findFirst(input as any))),

        findFirstOrThrow: procedure.input($Schema.TodoInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).todo.findFirstOrThrow(input as any))),

        findMany: procedure.input($Schema.TodoInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).todo.findMany(input as any))),

        findUnique: procedure.input($Schema.TodoInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).todo.findUnique(input as any))),

        findUniqueOrThrow: procedure.input($Schema.TodoInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).todo.findUniqueOrThrow(input as any))),

        groupBy: procedure.input($Schema.TodoInputSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).todo.groupBy(input as any))),

        updateMany: procedure.input($Schema.TodoInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).todo.updateMany(input as any))),

        update: procedure.input($Schema.TodoInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).todo.update(input as any))),

        upsert: procedure.input($Schema.TodoInputSchema.upsert).mutation(async ({ ctx, input }) => checkMutate(db(ctx).todo.upsert(input as any))),

        count: procedure.input($Schema.TodoInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).todo.count(input as any))),

    }
    );
}
