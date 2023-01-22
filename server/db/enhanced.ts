import { withPresets } from '@zenstackhq/runtime';
import { GetServerSidePropsContext } from 'next';
import { getServerAuthSession } from 'server/auth';
import { prisma } from './client';

/**
 * Get an authorization-enabled database client
 * @param ctx
 */
export async function getEnhancedPrisma(ctx: {
    req: GetServerSidePropsContext['req'];
    res: GetServerSidePropsContext['res'];
}) {
    const session = await getServerAuthSession(ctx);
    return withPresets(prisma, { user: session?.user });
}
