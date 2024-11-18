/******************************************************************************
* This file was generated by ZenStack CLI 2.9.0.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import { db } from ".";
import { createTRPCRouter } from "../../_app";
import { procedure } from "../../_app";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';

export default function createRouter() {
    return createTRPCRouter({

        aggregate: procedure.input($Schema.ListInputSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).list.aggregate(input as any))),

        createMany: procedure.input($Schema.ListInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).list.createMany(input as any))),

        create: procedure.input($Schema.ListInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).list.create(input as any))),

        deleteMany: procedure.input($Schema.ListInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).list.deleteMany(input as any))),

        delete: procedure.input($Schema.ListInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).list.delete(input as any))),

        findFirst: procedure.input($Schema.ListInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).list.findFirst(input as any))),

        findFirstOrThrow: procedure.input($Schema.ListInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).list.findFirstOrThrow(input as any))),

        findMany: procedure.input($Schema.ListInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).list.findMany(input as any))),

        findUnique: procedure.input($Schema.ListInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).list.findUnique(input as any))),

        findUniqueOrThrow: procedure.input($Schema.ListInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).list.findUniqueOrThrow(input as any))),

        groupBy: procedure.input($Schema.ListInputSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).list.groupBy(input as any))),

        updateMany: procedure.input($Schema.ListInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).list.updateMany(input as any))),

        update: procedure.input($Schema.ListInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).list.update(input as any))),

        upsert: procedure.input($Schema.ListInputSchema.upsert).mutation(async ({ ctx, input }) => checkMutate(db(ctx).list.upsert(input as any))),

        count: procedure.input($Schema.ListInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).list.count(input as any))),

    }
    );
}
