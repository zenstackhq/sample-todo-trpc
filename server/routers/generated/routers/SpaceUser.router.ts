/* eslint-disable */
import { db } from ".";
import { createTRPCRouter } from "../../_app";
import { procedure } from "../../_app";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@zenstackhq/runtime/models';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyTRPCRouter as AnyRouter } from '@trpc/server';
import type { UseTRPCSuspenseQueryOptions, UseTRPCSuspenseQueryResult, UseTRPCSuspenseInfiniteQueryOptions, UseTRPCSuspenseInfiniteQueryResult } from '@trpc/react-query/shared';

export default function createRouter() {
    return createTRPCRouter({

        aggregate: procedure.input($Schema.SpaceUserInputSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).spaceUser.aggregate(input as any))),

        createMany: procedure.input($Schema.SpaceUserInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).spaceUser.createMany(input as any))),

        create: procedure.input($Schema.SpaceUserInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).spaceUser.create(input as any))),

        deleteMany: procedure.input($Schema.SpaceUserInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).spaceUser.deleteMany(input as any))),

        delete: procedure.input($Schema.SpaceUserInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).spaceUser.delete(input as any))),

        findFirst: procedure.input($Schema.SpaceUserInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).spaceUser.findFirst(input as any))),

        findFirstOrThrow: procedure.input($Schema.SpaceUserInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).spaceUser.findFirstOrThrow(input as any))),

        findMany: procedure.input($Schema.SpaceUserInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).spaceUser.findMany(input as any))),

        findUnique: procedure.input($Schema.SpaceUserInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).spaceUser.findUnique(input as any))),

        findUniqueOrThrow: procedure.input($Schema.SpaceUserInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).spaceUser.findUniqueOrThrow(input as any))),

        groupBy: procedure.input($Schema.SpaceUserInputSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).spaceUser.groupBy(input as any))),

        updateMany: procedure.input($Schema.SpaceUserInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).spaceUser.updateMany(input as any))),

        update: procedure.input($Schema.SpaceUserInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).spaceUser.update(input as any))),

        upsert: procedure.input($Schema.SpaceUserInputSchema.upsert).mutation(async ({ ctx, input }) => checkMutate(db(ctx).spaceUser.upsert(input as any))),

        count: procedure.input($Schema.SpaceUserInputSchema.count).query(({ ctx, input }) => checkRead(db(ctx).spaceUser.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {

        useQuery: <T extends Prisma.SpaceUserAggregateArgs, TData = Prisma.GetSpaceUserAggregateType<T>>(
            input: Prisma.Subset<T, Prisma.SpaceUserAggregateArgs>,
            opts?: UseTRPCQueryOptions<Prisma.GetSpaceUserAggregateType<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SpaceUserAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.SpaceUserAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<T, Prisma.GetSpaceUserAggregateType<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.GetSpaceUserAggregateType<T>,
            TRPCClientErrorLike<AppRouter>,
            T
        >;
        useSuspenseQuery: <T extends Prisma.SpaceUserAggregateArgs, TData = Prisma.GetSpaceUserAggregateType<T>>(
            input: Prisma.Subset<T, Prisma.SpaceUserAggregateArgs>,
            opts?: UseTRPCSuspenseQueryOptions<Prisma.GetSpaceUserAggregateType<T>, TData, Error>
        ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
        useSuspenseInfiniteQuery: <T extends Prisma.SpaceUserAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.SpaceUserAggregateArgs>, 'cursor'>,
            opts?: UseTRPCSuspenseInfiniteQueryOptions<T, Prisma.GetSpaceUserAggregateType<T>, Error>
        ) => UseTRPCSuspenseInfiniteQueryResult<Prisma.GetSpaceUserAggregateType<T>, TRPCClientErrorLike<AppRouter>, T>;

    };
    createMany: {

        useMutation: <T extends Prisma.SpaceUserCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SpaceUserCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SpaceUserCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SpaceUserCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.SpaceUserCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SpaceUserCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SpaceUserGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SpaceUserGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SpaceUserCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SpaceUserCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SpaceUserGetPayload<T>, Context>) => Promise<Prisma.SpaceUserGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.SpaceUserDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SpaceUserDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SpaceUserDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SpaceUserDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.SpaceUserDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SpaceUserDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SpaceUserGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SpaceUserGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SpaceUserDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SpaceUserDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SpaceUserGetPayload<T>, Context>) => Promise<Prisma.SpaceUserGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.SpaceUserFindFirstArgs, TData = Prisma.SpaceUserGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SpaceUserFindFirstArgs>,
            opts?: UseTRPCQueryOptions<Prisma.SpaceUserGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SpaceUserFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SpaceUserFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<T, Prisma.SpaceUserGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SpaceUserGetPayload<T>,
            TRPCClientErrorLike<AppRouter>,
            T
        >;
        useSuspenseQuery: <T extends Prisma.SpaceUserFindFirstArgs, TData = Prisma.SpaceUserGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SpaceUserFindFirstArgs>,
            opts?: UseTRPCSuspenseQueryOptions<Prisma.SpaceUserGetPayload<T>, TData, Error>
        ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
        useSuspenseInfiniteQuery: <T extends Prisma.SpaceUserFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SpaceUserFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCSuspenseInfiniteQueryOptions<T, Prisma.SpaceUserGetPayload<T>, Error>
        ) => UseTRPCSuspenseInfiniteQueryResult<Prisma.SpaceUserGetPayload<T>, TRPCClientErrorLike<AppRouter>, T>;

    };
    findFirstOrThrow: {

        useQuery: <T extends Prisma.SpaceUserFindFirstOrThrowArgs, TData = Prisma.SpaceUserGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SpaceUserFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<Prisma.SpaceUserGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SpaceUserFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SpaceUserFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<T, Prisma.SpaceUserGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SpaceUserGetPayload<T>,
            TRPCClientErrorLike<AppRouter>,
            T
        >;
        useSuspenseQuery: <T extends Prisma.SpaceUserFindFirstOrThrowArgs, TData = Prisma.SpaceUserGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SpaceUserFindFirstOrThrowArgs>,
            opts?: UseTRPCSuspenseQueryOptions<Prisma.SpaceUserGetPayload<T>, TData, Error>
        ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
        useSuspenseInfiniteQuery: <T extends Prisma.SpaceUserFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SpaceUserFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCSuspenseInfiniteQueryOptions<T, Prisma.SpaceUserGetPayload<T>, Error>
        ) => UseTRPCSuspenseInfiniteQueryResult<Prisma.SpaceUserGetPayload<T>, TRPCClientErrorLike<AppRouter>, T>;

    };
    findMany: {

        useQuery: <T extends Prisma.SpaceUserFindManyArgs, TData = Array<Prisma.SpaceUserGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.SpaceUserFindManyArgs>,
            opts?: UseTRPCQueryOptions<Array<Prisma.SpaceUserGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SpaceUserFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SpaceUserFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<T, Array<Prisma.SpaceUserGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.SpaceUserGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>,
            T
        >;
        useSuspenseQuery: <T extends Prisma.SpaceUserFindManyArgs, TData = Array<Prisma.SpaceUserGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.SpaceUserFindManyArgs>,
            opts?: UseTRPCSuspenseQueryOptions<Array<Prisma.SpaceUserGetPayload<T>>, TData, Error>
        ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
        useSuspenseInfiniteQuery: <T extends Prisma.SpaceUserFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SpaceUserFindManyArgs>, 'cursor'>,
            opts?: UseTRPCSuspenseInfiniteQueryOptions<T, Array<Prisma.SpaceUserGetPayload<T>>, Error>
        ) => UseTRPCSuspenseInfiniteQueryResult<Array<Prisma.SpaceUserGetPayload<T>>, TRPCClientErrorLike<AppRouter>, T>;

    };
    findUnique: {

        useQuery: <T extends Prisma.SpaceUserFindUniqueArgs, TData = Prisma.SpaceUserGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SpaceUserFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<Prisma.SpaceUserGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SpaceUserFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SpaceUserFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<T, Prisma.SpaceUserGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SpaceUserGetPayload<T>,
            TRPCClientErrorLike<AppRouter>,
            T
        >;
        useSuspenseQuery: <T extends Prisma.SpaceUserFindUniqueArgs, TData = Prisma.SpaceUserGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SpaceUserFindUniqueArgs>,
            opts?: UseTRPCSuspenseQueryOptions<Prisma.SpaceUserGetPayload<T>, TData, Error>
        ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
        useSuspenseInfiniteQuery: <T extends Prisma.SpaceUserFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SpaceUserFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCSuspenseInfiniteQueryOptions<T, Prisma.SpaceUserGetPayload<T>, Error>
        ) => UseTRPCSuspenseInfiniteQueryResult<Prisma.SpaceUserGetPayload<T>, TRPCClientErrorLike<AppRouter>, T>;

    };
    findUniqueOrThrow: {

        useQuery: <T extends Prisma.SpaceUserFindUniqueOrThrowArgs, TData = Prisma.SpaceUserGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SpaceUserFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<Prisma.SpaceUserGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SpaceUserFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SpaceUserFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<T, Prisma.SpaceUserGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SpaceUserGetPayload<T>,
            TRPCClientErrorLike<AppRouter>,
            T
        >;
        useSuspenseQuery: <T extends Prisma.SpaceUserFindUniqueOrThrowArgs, TData = Prisma.SpaceUserGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SpaceUserFindUniqueOrThrowArgs>,
            opts?: UseTRPCSuspenseQueryOptions<Prisma.SpaceUserGetPayload<T>, TData, Error>
        ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
        useSuspenseInfiniteQuery: <T extends Prisma.SpaceUserFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SpaceUserFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCSuspenseInfiniteQueryOptions<T, Prisma.SpaceUserGetPayload<T>, Error>
        ) => UseTRPCSuspenseInfiniteQueryResult<Prisma.SpaceUserGetPayload<T>, TRPCClientErrorLike<AppRouter>, T>;

    };
    groupBy: {

        useQuery: <T extends Prisma.SpaceUserGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.SpaceUserGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.SpaceUserGroupByArgs['orderBy'] },
            OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
            ByValid extends Prisma.Has<ByFields, OrderFields>,
            HavingFields extends Prisma.GetHavingFields<T['having']>,
            HavingValid extends Prisma.Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
            InputErrors extends ByEmpty extends Prisma.True
            ? `Error: "by" must not be empty.`
            : HavingValid extends Prisma.False
            ? {
                [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                : [
                    Error,
                    'Field ',
                    P,
                    ` in "having" needs to be provided in "by"`,
                ]
            }[HavingFields]
            : 'take' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
            : ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            , TData = {} extends InputErrors ? Prisma.GetSpaceUserGroupByPayload<T> : InputErrors>(
                input: Prisma.SubsetIntersection<T, Prisma.SpaceUserGroupByArgs, OrderByArg> & InputErrors,
                opts?: UseTRPCQueryOptions<{} extends InputErrors ? Prisma.GetSpaceUserGroupByPayload<T> : InputErrors, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.SpaceUserGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.SpaceUserGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.SpaceUserGroupByArgs['orderBy'] },
            OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
            ByValid extends Prisma.Has<ByFields, OrderFields>,
            HavingFields extends Prisma.GetHavingFields<T['having']>,
            HavingValid extends Prisma.Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
            InputErrors extends ByEmpty extends Prisma.True
            ? `Error: "by" must not be empty.`
            : HavingValid extends Prisma.False
            ? {
                [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                : [
                    Error,
                    'Field ',
                    P,
                    ` in "having" needs to be provided in "by"`,
                ]
            }[HavingFields]
            : 'take' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
            : ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        >(
            input: Omit<Prisma.SubsetIntersection<T, Prisma.SpaceUserGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<T, {} extends InputErrors ? Prisma.GetSpaceUserGroupByPayload<T> : InputErrors, Error>
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetSpaceUserGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>,
            T
        >;
        useSuspenseQuery: <T extends Prisma.SpaceUserGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.SpaceUserGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.SpaceUserGroupByArgs['orderBy'] },
            OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
            ByValid extends Prisma.Has<ByFields, OrderFields>,
            HavingFields extends Prisma.GetHavingFields<T['having']>,
            HavingValid extends Prisma.Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
            InputErrors extends ByEmpty extends Prisma.True
            ? `Error: "by" must not be empty.`
            : HavingValid extends Prisma.False
            ? {
                [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                : [
                    Error,
                    'Field ',
                    P,
                    ` in "having" needs to be provided in "by"`,
                ]
            }[HavingFields]
            : 'take' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
            : ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            , TData = {} extends InputErrors ? Prisma.GetSpaceUserGroupByPayload<T> : InputErrors>(
                input: Prisma.SubsetIntersection<T, Prisma.SpaceUserGroupByArgs, OrderByArg> & InputErrors,
                opts?: UseTRPCSuspenseQueryOptions<{} extends InputErrors ? Prisma.GetSpaceUserGroupByPayload<T> : InputErrors, TData, Error>
            ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
        useSuspenseInfiniteQuery: <T extends Prisma.SpaceUserGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.SpaceUserGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.SpaceUserGroupByArgs['orderBy'] },
            OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
            ByValid extends Prisma.Has<ByFields, OrderFields>,
            HavingFields extends Prisma.GetHavingFields<T['having']>,
            HavingValid extends Prisma.Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
            InputErrors extends ByEmpty extends Prisma.True
            ? `Error: "by" must not be empty.`
            : HavingValid extends Prisma.False
            ? {
                [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                : [
                    Error,
                    'Field ',
                    P,
                    ` in "having" needs to be provided in "by"`,
                ]
            }[HavingFields]
            : 'take' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
            : ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        >(
            input: Omit<Prisma.SubsetIntersection<T, Prisma.SpaceUserGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCSuspenseInfiniteQueryOptions<T, {} extends InputErrors ? Prisma.GetSpaceUserGroupByPayload<T> : InputErrors, Error>
        ) => UseTRPCSuspenseInfiniteQueryResult<{} extends InputErrors ? Prisma.GetSpaceUserGroupByPayload<T> : InputErrors, TRPCClientErrorLike<AppRouter>, T>;

    };
    updateMany: {

        useMutation: <T extends Prisma.SpaceUserUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SpaceUserUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SpaceUserUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SpaceUserUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.SpaceUserUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SpaceUserUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SpaceUserGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SpaceUserGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SpaceUserUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SpaceUserUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SpaceUserGetPayload<T>, Context>) => Promise<Prisma.SpaceUserGetPayload<T>>
            };

    };
    upsert: {

        useMutation: <T extends Prisma.SpaceUserUpsertArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SpaceUserUpsertArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SpaceUserGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SpaceUserGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SpaceUserUpsertArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SpaceUserUpsertArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SpaceUserGetPayload<T>, Context>) => Promise<Prisma.SpaceUserGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.SpaceUserCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.SpaceUserCountAggregateOutputType>
            : number>(
                input: Prisma.Subset<T, Prisma.SpaceUserCountArgs>,
                opts?: UseTRPCQueryOptions<'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.SpaceUserCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.SpaceUserCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.SpaceUserCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.SpaceUserCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.SpaceUserCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>,
            T
        >;
        useSuspenseQuery: <T extends Prisma.SpaceUserCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.SpaceUserCountAggregateOutputType>
            : number>(
                input: Prisma.Subset<T, Prisma.SpaceUserCountArgs>,
                opts?: UseTRPCSuspenseQueryOptions<'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.SpaceUserCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
        useSuspenseInfiniteQuery: <T extends Prisma.SpaceUserCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.SpaceUserCountArgs>, 'cursor'>,
            opts?: UseTRPCSuspenseInfiniteQueryOptions<T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.SpaceUserCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCSuspenseInfiniteQueryResult<'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.SpaceUserCountAggregateOutputType>
            : number, TRPCClientErrorLike<AppRouter>, T>;

    };
}
