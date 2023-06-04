import type { RequestHandler } from './$types';

import { prisma } from '$lib/server/database';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const posts = await prisma.post.findMany();

	return json(posts, { status: 200 });
};
