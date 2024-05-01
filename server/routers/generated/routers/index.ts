/* eslint-disable */
import { unsetMarker, type AnyRouter, type AnyRootConfig, type CreateRouterInner, type Procedure, type ProcedureBuilder, type ProcedureParams, type ProcedureRouterRecord, type ProcedureType } from "@trpc/server";
import { type PrismaClient } from "@zenstackhq/runtime/models";
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

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        space: createSpaceRouter(router, procedure),
        spaceUser: createSpaceUserRouter(router, procedure),
        user: createUserRouter(router, procedure),
        list: createListRouter(router, procedure),
        todo: createTodoRouter(router, procedure),
        account: createAccountRouter(router, procedure),
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
