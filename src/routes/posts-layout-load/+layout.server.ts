import { prisma } from '$lib/server/database';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const posts = await prisma.post.findMany({
		select: {
			title: true,
			id: true,
			slug: true,
		},
		take: 6,
	});

	return {
		message: 'This was fetched by layout.',
		posts,
	};
};
