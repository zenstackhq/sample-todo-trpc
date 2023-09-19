/* eslint-disable */
import {
    type AnyRouter,
    type AnyRootConfig,
    type CreateRouterInner,
    type Procedure,
    type ProcedureBuilder,
    type ProcedureParams,
    type ProcedureRouterRecord,
    type ProcedureType,
} from '@trpc/server';
import { type PrismaClient, type Prisma } from '@prisma/client';
import type z from 'zod';
import createSpaceRouter from './Space.router';
import createSpaceUserRouter from './SpaceUser.router';
import createUserRouter from './User.router';
import createListRouter from './List.router';
import createTodoRouter from './Todo.router';
import createAccountRouter from './Account.router';
import { ClientType as SpaceClientType } from './Space.router';
import { ClientType as SpaceUserClientType } from './SpaceUser.router';
import { ClientType as UserClientType } from './User.router';
import { ClientType as ListClientType } from './List.router';
import { ClientType as TodoClientType } from './Todo.router';
import { ClientType as AccountClientType } from './Account.router';

export { PrismaClient } from '@prisma/client';

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <ProcRouterRecord extends ProcedureRouterRecord>(
    procedures: ProcRouterRecord,
) => CreateRouterInner<Config, ProcRouterRecord>;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<{
    _config: Config;
    _ctx_out: Config['$types']['ctx'];
    _input_in: any;
    _input_out: any;
    _output_in: any;
    _output_out: any;
    _meta: Config['$types']['meta'];
}>;

type ExtractParamsFromProcBuilder<Builder extends ProcedureBuilder<any>> = Builder extends ProcedureBuilder<infer P>
    ? P
    : never;

type FromPromise<P extends Promise<any>> = P extends Promise<infer T> ? T : never;

type Join<A, B> = A extends symbol ? B : A & B;

export type ProcReturns<
    PType extends ProcedureType,
    PBuilder extends ProcBuilder<BaseConfig>,
    ZType extends z.ZodType,
    PPromise extends Prisma.PrismaPromise<any>,
> = Procedure<
    PType,
    ProcedureParams<
        ExtractParamsFromProcBuilder<PBuilder>['_config'],
        ExtractParamsFromProcBuilder<PBuilder>['_ctx_out'],
        Join<ExtractParamsFromProcBuilder<PBuilder>['_input_in'], z.infer<ZType>>,
        Join<ExtractParamsFromProcBuilder<PBuilder>['_input_out'], z.infer<ZType>>,
        Join<ExtractParamsFromProcBuilder<PBuilder>['_output_in'], FromPromise<PPromise>>,
        Join<ExtractParamsFromProcBuilder<PBuilder>['_output_out'], FromPromise<PPromise>>,
        ExtractParamsFromProcBuilder<PBuilder>['_meta']
    >
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Router extends RouterFactory<BaseConfig>, Proc extends ProcBuilder<BaseConfig>>(
    router: Router,
    procedure: Proc,
) {
    return router({
        space: createSpaceRouter<Router, Proc>(router, procedure),
        spaceUser: createSpaceUserRouter<Router, Proc>(router, procedure),
        user: createUserRouter<Router, Proc>(router, procedure),
        list: createListRouter<Router, Proc>(router, procedure),
        todo: createTodoRouter<Router, Proc>(router, procedure),
        account: createAccountRouter<Router, Proc>(router, procedure),
    });
}

export interface ClientType<AppRouter extends AnyRouter> {
    space: SpaceClientType<AppRouter>;
    spaceUser: SpaceUserClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    list: ListClientType<AppRouter>;
    todo: TodoClientType<AppRouter>;
    account: AccountClientType<AppRouter>;
}
