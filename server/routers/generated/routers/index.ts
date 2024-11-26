/******************************************************************************
* This file was generated by ZenStack CLI 2.9.3.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import type { AnyTRPCRouter as AnyRouter } from "@trpc/server";
import type { PrismaClient } from "@zenstackhq/runtime/models";
import { createTRPCRouter } from "../../_app";
import createSpaceRouter from "./Space.router";
import createSpaceUserRouter from "./SpaceUser.router";
import createUserRouter from "./User.router";
import createListRouter from "./List.router";
import createTodoRouter from "./Todo.router";
import createAccountRouter from "./Account.router";

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter() {
    return createTRPCRouter({
        space: createSpaceRouter(),
        spaceUser: createSpaceUserRouter(),
        user: createUserRouter(),
        list: createListRouter(),
        todo: createTodoRouter(),
        account: createAccountRouter(),
    }
    );
}
