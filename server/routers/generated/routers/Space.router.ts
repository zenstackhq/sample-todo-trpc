/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from '.';
import { SpaceInputSchema } from '@zenstackhq/runtime/zod/input';
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
            .input(SpaceInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).space.aggregate(input as any))),

        createMany: procedure
            .input(SpaceInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).space.createMany(input as any))),

        create: procedure
            .input(SpaceInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).space.create(input as any))),

        deleteMany: procedure
            .input(SpaceInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).space.deleteMany(input as any))),

        delete: procedure
            .input(SpaceInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).space.delete(input as any))),

        findFirst: procedure
            .input(SpaceInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).space.findFirst(input as any))),

        findFirstOrThrow: procedure
            .input(SpaceInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).space.findFirstOrThrow(input as any))),

        findMany: procedure
            .input(SpaceInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).space.findMany(input as any))),

        findUnique: procedure
            .input(SpaceInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).space.findUnique(input as any))),

        findUniqueOrThrow: procedure
            .input(SpaceInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).space.findUniqueOrThrow(input as any))),

        groupBy: procedure
            .input(SpaceInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).space.groupBy(input as any))),

        updateMany: procedure
            .input(SpaceInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).space.updateMany(input as any))),

        update: procedure
            .input(SpaceInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).space.update(input as any))),

        upsert: procedure
            .input(SpaceInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).space.upsert(input as any))),
    });
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {
        useQuery: <T extends Prisma.SpaceAggregateArgs>(
            input: Prisma.Subset<T, Prisma.SpaceAggregateArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.GetSpaceAggregateType<T>,
                Prisma.GetSpaceAggregateType<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.GetSpaceAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.SpaceAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.SpaceAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetSpaceAggregateType<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.GetSpaceAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };
    createMany: {
        useMutation: <T extends Prisma.SpaceCreateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SpaceCreateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SpaceGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SpaceCreateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SpaceCreateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    create: {
        useMutation: <T extends Prisma.SpaceCreateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SpaceCreateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SpaceGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.SpaceGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SpaceCreateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SpaceCreateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SpaceGetPayload<T>, Context>,
            ) => Promise<Prisma.SpaceGetPayload<T>>;
        };
    };
    deleteMany: {
        useMutation: <T extends Prisma.SpaceDeleteManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SpaceDeleteManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SpaceGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SpaceDeleteManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SpaceDeleteManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    delete: {
        useMutation: <T extends Prisma.SpaceDeleteArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SpaceDeleteArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SpaceGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.SpaceGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SpaceDeleteArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SpaceDeleteArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SpaceGetPayload<T>, Context>,
            ) => Promise<Prisma.SpaceGetPayload<T>>;
        };
    };
    findFirst: {
        useQuery: <T extends Prisma.SpaceFindFirstArgs>(
            input: Prisma.SelectSubset<T, Prisma.SpaceFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SpaceGetPayload<T>, Prisma.SpaceGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.SpaceGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.SpaceFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SpaceFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SpaceGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.SpaceGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findFirstOrThrow: {
        useQuery: <T extends Prisma.SpaceFindFirstOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.SpaceFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SpaceGetPayload<T>, Prisma.SpaceGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.SpaceGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.SpaceFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SpaceFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SpaceGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.SpaceGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findMany: {
        useQuery: <T extends Prisma.SpaceFindManyArgs>(
            input: Prisma.SelectSubset<T, Prisma.SpaceFindManyArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Array<Prisma.SpaceGetPayload<T>>,
                Array<Prisma.SpaceGetPayload<T>>,
                Error
            >,
        ) => UseTRPCQueryResult<Array<Prisma.SpaceGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.SpaceFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SpaceFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.SpaceGetPayload<T>>, Error>,
        ) => UseTRPCInfiniteQueryResult<Array<Prisma.SpaceGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
    };
    findUnique: {
        useQuery: <T extends Prisma.SpaceFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.SpaceFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SpaceGetPayload<T>, Prisma.SpaceGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.SpaceGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.SpaceFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SpaceFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SpaceGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.SpaceGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findUniqueOrThrow: {
        useQuery: <T extends Prisma.SpaceFindUniqueOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.SpaceFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SpaceGetPayload<T>, Prisma.SpaceGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.SpaceGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.SpaceFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SpaceFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SpaceGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.SpaceGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    groupBy: {
        useQuery: <
            T extends Prisma.SpaceGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.SpaceGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.SpaceGroupByArgs['orderBy'] },
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
            input: Prisma.SubsetIntersection<T, Prisma.SpaceGroupByArgs, OrderByArg> & InputErrors,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetSpaceGroupByPayload<T> : InputErrors,
                {} extends InputErrors ? Prisma.GetSpaceGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCQueryResult<
            {} extends InputErrors ? Prisma.GetSpaceGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <
            T extends Prisma.SpaceGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.SpaceGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.SpaceGroupByArgs['orderBy'] },
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
            input: Omit<Prisma.SubsetIntersection<T, Prisma.SpaceGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetSpaceGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetSpaceGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
    };
    updateMany: {
        useMutation: <T extends Prisma.SpaceUpdateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SpaceUpdateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SpaceGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SpaceUpdateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SpaceUpdateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    update: {
        useMutation: <T extends Prisma.SpaceUpdateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SpaceUpdateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SpaceGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.SpaceGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SpaceUpdateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SpaceUpdateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SpaceGetPayload<T>, Context>,
            ) => Promise<Prisma.SpaceGetPayload<T>>;
        };
    };
    upsert: {
        useMutation: <T extends Prisma.SpaceUpsertArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SpaceUpsertArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SpaceGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.SpaceGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SpaceUpsertArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SpaceUpsertArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SpaceGetPayload<T>, Context>,
            ) => Promise<Prisma.SpaceGetPayload<T>>;
        };
    };
}
