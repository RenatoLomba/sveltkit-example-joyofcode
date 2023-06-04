import type { RequestHandler } from './$types';

import { prisma } from '$lib/server/database';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async (event) => {
	const posts = await prisma.post.findMany({
		take: Math.round(Math.random() * 30),
	});

	event.setHeaders({
		'Cache-Control': 'max-age=60',
	});

	return json(posts, { status: 200 });
};
