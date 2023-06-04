import { error } from '@sveltejs/kit';
import { prisma } from '$lib/server/database';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	const post = await prisma.post.findUnique({
		where: { slug },
	});

	if (!post) {
		throw error(404, 'Post not found.');
	}

	return { post };
};
