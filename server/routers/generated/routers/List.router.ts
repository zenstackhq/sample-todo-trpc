/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from '.';
import * as $Schema from '@zenstackhq/runtime/zod/input';
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
            .input($Schema.ListInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).list.aggregate(input as any))),

        createMany: procedure
            .input($Schema.ListInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).list.createMany(input as any))),

        create: procedure
            .input($Schema.ListInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).list.create(input as any))),

        deleteMany: procedure
            .input($Schema.ListInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).list.deleteMany(input as any))),

        delete: procedure
            .input($Schema.ListInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).list.delete(input as any))),

        findFirst: procedure
            .input($Schema.ListInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).list.findFirst(input as any))),

        findFirstOrThrow: procedure
            .input($Schema.ListInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).list.findFirstOrThrow(input as any))),

        findMany: procedure
            .input($Schema.ListInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).list.findMany(input as any))),

        findUnique: procedure
            .input($Schema.ListInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).list.findUnique(input as any))),

        findUniqueOrThrow: procedure
            .input($Schema.ListInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).list.findUniqueOrThrow(input as any))),

        groupBy: procedure
            .input($Schema.ListInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).list.groupBy(input as any))),

        updateMany: procedure
            .input($Schema.ListInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).list.updateMany(input as any))),

        update: procedure
            .input($Schema.ListInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).list.update(input as any))),

        upsert: procedure
            .input($Schema.ListInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).list.upsert(input as any))),

        count: procedure
            .input($Schema.ListInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).list.count(input as any))),
    });
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {
        useQuery: <T extends Prisma.ListAggregateArgs, TData = Prisma.GetListAggregateType<T>>(
            input: Prisma.Subset<T, Prisma.ListAggregateArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.GetListAggregateType<T>, TData, Error>,
        ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.ListAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.ListAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetListAggregateType<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.GetListAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };
    createMany: {
        useMutation: <T extends Prisma.ListCreateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.ListCreateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.BatchPayload,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.ListCreateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.ListCreateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    create: {
        useMutation: <T extends Prisma.ListCreateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.ListCreateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.ListGetPayload<T>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.ListGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.ListCreateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.ListCreateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ListGetPayload<T>, Context>,
            ) => Promise<Prisma.ListGetPayload<T>>;
        };
    };
    deleteMany: {
        useMutation: <T extends Prisma.ListDeleteManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.ListDeleteManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.BatchPayload,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.ListDeleteManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.ListDeleteManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    delete: {
        useMutation: <T extends Prisma.ListDeleteArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.ListDeleteArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.ListGetPayload<T>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.ListGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.ListDeleteArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.ListDeleteArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ListGetPayload<T>, Context>,
            ) => Promise<Prisma.ListGetPayload<T>>;
        };
    };
    findFirst: {
        useQuery: <T extends Prisma.ListFindFirstArgs, TData = Prisma.ListGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ListFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ListGetPayload<T>, TData, Error>,
        ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.ListFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ListFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ListGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.ListGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findFirstOrThrow: {
        useQuery: <T extends Prisma.ListFindFirstOrThrowArgs, TData = Prisma.ListGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ListFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ListGetPayload<T>, TData, Error>,
        ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.ListFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ListFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ListGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.ListGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findMany: {
        useQuery: <T extends Prisma.ListFindManyArgs, TData = Array<Prisma.ListGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ListFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ListGetPayload<T>>, TData, Error>,
        ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.ListFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ListFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ListGetPayload<T>>, Error>,
        ) => UseTRPCInfiniteQueryResult<Array<Prisma.ListGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
    };
    findUnique: {
        useQuery: <T extends Prisma.ListFindUniqueArgs, TData = Prisma.ListGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ListFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ListGetPayload<T>, TData, Error>,
        ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.ListFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ListFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ListGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.ListGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findUniqueOrThrow: {
        useQuery: <T extends Prisma.ListFindUniqueOrThrowArgs, TData = Prisma.ListGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ListFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ListGetPayload<T>, TData, Error>,
        ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.ListFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ListFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ListGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.ListGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    groupBy: {
        useQuery: <
            T extends Prisma.ListGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.ListGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.ListGroupByArgs['orderBy'] },
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
            TData = {} extends InputErrors ? Prisma.GetListGroupByPayload<T> : InputErrors,
        >(
            input: Prisma.SubsetIntersection<T, Prisma.ListGroupByArgs, OrderByArg> & InputErrors,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetListGroupByPayload<T> : InputErrors,
                TData,
                Error
            >,
        ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <
            T extends Prisma.ListGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.ListGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.ListGroupByArgs['orderBy'] },
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
            input: Omit<Prisma.SubsetIntersection<T, Prisma.ListGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetListGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetListGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
    };
    updateMany: {
        useMutation: <T extends Prisma.ListUpdateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.ListUpdateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.BatchPayload,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.ListUpdateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.ListUpdateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    update: {
        useMutation: <T extends Prisma.ListUpdateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.ListUpdateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.ListGetPayload<T>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.ListGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.ListUpdateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.ListUpdateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ListGetPayload<T>, Context>,
            ) => Promise<Prisma.ListGetPayload<T>>;
        };
    };
    upsert: {
        useMutation: <T extends Prisma.ListUpsertArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.ListUpsertArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.ListGetPayload<T>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.ListGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.ListUpsertArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.ListUpsertArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ListGetPayload<T>, Context>,
            ) => Promise<Prisma.ListGetPayload<T>>;
        };
    };
    count: {
        useQuery: <
            T extends Prisma.ListCountArgs,
            TData = 'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ListCountAggregateOutputType>
                : number,
        >(
            input: Prisma.Subset<T, Prisma.ListCountArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.ListCountAggregateOutputType>
                    : number,
                TData,
                Error
            >,
        ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.ListCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.ListCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.ListCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ListCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
    };
}
