/******************************************************************************
* This file was generated by ZenStack CLI 2.9.3.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import type { AnyTRPCRouter as AnyRouter } from '@trpc/server';
import type { NextPageContext } from 'next';
import { type CreateTRPCNext, createTRPCNext as _createTRPCNext } from '@trpc/next';
import type { DeepOverrideAtPath } from './utils';
import { ClientType as SpaceClientType } from "./Space.next.type";
import { ClientType as SpaceUserClientType } from "./SpaceUser.next.type";
import { ClientType as UserClientType } from "./User.next.type";
import { ClientType as ListClientType } from "./List.next.type";
import { ClientType as TodoClientType } from "./Todo.next.type";
import { ClientType as AccountClientType } from "./Account.next.type";

export function createTRPCNext<
    TRouter extends AnyRouter,
    TPath extends string | undefined = undefined,
    TSSRContext extends NextPageContext = NextPageContext
>(opts: Parameters<typeof _createTRPCNext>[0]) {
    const r: CreateTRPCNext<TRouter, TSSRContext> = _createTRPCNext<TRouter, TSSRContext>(opts);
    return r as DeepOverrideAtPath<CreateTRPCNext<TRouter, TSSRContext>, ClientType<TRouter>, TPath>;
}

export interface ClientType<AppRouter extends AnyRouter> {
    space: SpaceClientType<AppRouter>;
    spaceUser: SpaceUserClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    list: ListClientType<AppRouter>;
    todo: TodoClientType<AppRouter>;
    account: AccountClientType<AppRouter>;
}
