/* eslint-disable */
import type { AnyTRPCRouter as AnyRouter } from "@trpc/server";
import type { PrismaClient } from "@zenstackhq/runtime/models";
import { createTRPCRouter } from "../../_app";
import createSpaceRouter from "./Space.router";
import createSpaceUserRouter from "./SpaceUser.router";
import createUserRouter from "./User.router";
import createListRouter from "./List.router";
import createTodoRouter from "./Todo.router";
import createAccountRouter from "./Account.router";
import { ClientType as SpaceClientType } from "./Space.router";
import { ClientType as SpaceUserClientType } from "./SpaceUser.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as ListClientType } from "./List.router";
import { ClientType as TodoClientType } from "./Todo.router";
import { ClientType as AccountClientType } from "./Account.router";

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

export interface ClientType<AppRouter extends AnyRouter> {
    space: SpaceClientType<AppRouter>;
    spaceUser: SpaceUserClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    list: ListClientType<AppRouter>;
    todo: TodoClientType<AppRouter>;
    account: AccountClientType<AppRouter>;
}
