import { json } from '@sveltejs/kit';

import { prisma } from '$lib/server/database';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const page = Number(url.searchParams.get('page') ?? 1);
	const limit = Number(url.searchParams.get('limit') ?? 10);
	const order = url.searchParams.get('order') === 'desc' ? 'desc' : 'asc';
	const search = url.searchParams.get('search');

	const posts = await prisma.post.findMany({
		...(search
			? {
					where: {
						title: {
							contains: search,
						},
					},
			  }
			: {}),
		take: limit,
		skip: (page - 1) * limit,
		orderBy: {
			title: order,
		},
	});

	return json(posts, { status: 200 });
};
