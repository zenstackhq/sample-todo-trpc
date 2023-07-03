/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from '.';
import { UserInputSchema } from '@zenstackhq/runtime/zod/input';
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type {
    UseTRPCMutationOptions,
    UseTRPCMutationResult,
    UseTRPCQueryOptions,
    UseTRPCQueryResult,
    UseTRPCInfiniteQueryOptions,
    UseTRPCInfiniteQueryResult,
} from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(
    router: RouterFactory<Config>,
    procedure: ProcBuilder<Config>,
) {
    return router({
        aggregate: procedure
            .input(UserInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).user.aggregate(input as any))),

        createMany: procedure
            .input(UserInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.createMany(input as any))),

        create: procedure
            .input(UserInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.create(input as any))),

        deleteMany: procedure
            .input(UserInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.deleteMany(input as any))),

        delete: procedure
            .input(UserInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.delete(input as any))),

        findFirst: procedure
            .input(UserInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).user.findFirst(input as any))),

        findFirstOrThrow: procedure
            .input(UserInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).user.findFirstOrThrow(input as any))),

        findMany: procedure
            .input(UserInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).user.findMany(input as any))),

        findUnique: procedure
            .input(UserInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).user.findUnique(input as any))),

        findUniqueOrThrow: procedure
            .input(UserInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).user.findUniqueOrThrow(input as any))),

        groupBy: procedure
            .input(UserInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).user.groupBy(input as any))),

        updateMany: procedure
            .input(UserInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.updateMany(input as any))),

        update: procedure
            .input(UserInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.update(input as any))),

        upsert: procedure
            .input(UserInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.upsert(input as any))),
    });
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {
        useQuery: <T extends Prisma.UserAggregateArgs>(
            input: Prisma.Subset<T, Prisma.UserAggregateArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.GetUserAggregateType<T>,
                Prisma.GetUserAggregateType<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.GetUserAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.UserAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.UserAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetUserAggregateType<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.GetUserAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };
    createMany: {
        useMutation: <T extends Prisma.UserCreateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.UserCreateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.UserGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.UserCreateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.UserCreateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    create: {
        useMutation: <T extends Prisma.UserCreateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.UserCreateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.UserGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.UserGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.UserCreateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.UserCreateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.UserGetPayload<T>, Context>,
            ) => Promise<Prisma.UserGetPayload<T>>;
        };
    };
    deleteMany: {
        useMutation: <T extends Prisma.UserDeleteManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.UserDeleteManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.UserGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.UserDeleteManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.UserDeleteManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    delete: {
        useMutation: <T extends Prisma.UserDeleteArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.UserDeleteArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.UserGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.UserGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.UserDeleteArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.UserDeleteArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.UserGetPayload<T>, Context>,
            ) => Promise<Prisma.UserGetPayload<T>>;
        };
    };
    findFirst: {
        useQuery: <T extends Prisma.UserFindFirstArgs>(
            input: Prisma.SelectSubset<T, Prisma.UserFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.UserGetPayload<T>, Prisma.UserGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.UserGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.UserFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.UserFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.UserGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.UserGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findFirstOrThrow: {
        useQuery: <T extends Prisma.UserFindFirstOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.UserFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.UserGetPayload<T>, Prisma.UserGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.UserGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.UserFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.UserFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.UserGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.UserGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findMany: {
        useQuery: <T extends Prisma.UserFindManyArgs>(
            input: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Array<Prisma.UserGetPayload<T>>,
                Array<Prisma.UserGetPayload<T>>,
                Error
            >,
        ) => UseTRPCQueryResult<Array<Prisma.UserGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.UserFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.UserFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.UserGetPayload<T>>, Error>,
        ) => UseTRPCInfiniteQueryResult<Array<Prisma.UserGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
    };
    findUnique: {
        useQuery: <T extends Prisma.UserFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.UserGetPayload<T>, Prisma.UserGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.UserGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.UserFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.UserGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.UserGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findUniqueOrThrow: {
        useQuery: <T extends Prisma.UserFindUniqueOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.UserFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.UserGetPayload<T>, Prisma.UserGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.UserGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.UserFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.UserFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.UserGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.UserGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    groupBy: {
        useQuery: <
            T extends Prisma.UserGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.UserGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.UserGroupByArgs['orderBy'] },
            OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends Prisma.TupleToUnion<T['by']>,
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
                          : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
                  }[HavingFields]
                : 'take' extends Prisma.Keys<T>
                ? 'orderBy' extends Prisma.Keys<T>
                    ? ByValid extends Prisma.True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                    : 'Error: If you provide "take", you also need to provide "orderBy"'
                : 'skip' extends Prisma.Keys<T>
                ? 'orderBy' extends Prisma.Keys<T>
                    ? ByValid extends Prisma.True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                    : 'Error: If you provide "skip", you also need to provide "orderBy"'
                : ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
        >(
            input: Prisma.SubsetIntersection<T, Prisma.UserGroupByArgs, OrderByArg> & InputErrors,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetUserGroupByPayload<T> : InputErrors,
                {} extends InputErrors ? Prisma.GetUserGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCQueryResult<
            {} extends InputErrors ? Prisma.GetUserGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <
            T extends Prisma.UserGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.UserGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.UserGroupByArgs['orderBy'] },
            OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends Prisma.TupleToUnion<T['by']>,
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
                          : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
                  }[HavingFields]
                : 'take' extends Prisma.Keys<T>
                ? 'orderBy' extends Prisma.Keys<T>
                    ? ByValid extends Prisma.True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                    : 'Error: If you provide "take", you also need to provide "orderBy"'
                : 'skip' extends Prisma.Keys<T>
                ? 'orderBy' extends Prisma.Keys<T>
                    ? ByValid extends Prisma.True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                    : 'Error: If you provide "skip", you also need to provide "orderBy"'
                : ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
        >(
            input: Omit<Prisma.SubsetIntersection<T, Prisma.UserGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetUserGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetUserGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
    };
    updateMany: {
        useMutation: <T extends Prisma.UserUpdateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.UserUpdateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.UserGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.UserUpdateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.UserUpdateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    update: {
        useMutation: <T extends Prisma.UserUpdateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.UserUpdateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.UserGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.UserGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.UserUpdateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.UserUpdateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.UserGetPayload<T>, Context>,
            ) => Promise<Prisma.UserGetPayload<T>>;
        };
    };
    upsert: {
        useMutation: <T extends Prisma.UserUpsertArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.UserUpsertArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.UserGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.UserGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.UserUpsertArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.UserUpsertArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.UserGetPayload<T>, Context>,
            ) => Promise<Prisma.UserGetPayload<T>>;
        };
    };
}
