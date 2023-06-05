import type { RequestHandler } from './$types';

import { prisma } from '$lib/server/database';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const posts = await prisma.post.findMany({
		take: Math.round(Math.random() * 30),
	});

	// Cache return same response for 60 seconds (on disk)
	// event.setHeaders({
	// 	'Cache-Control': 'max-age=60',
	// });

	// Cache return same response for every request on web for 60 seconds (on server)
	// event.setHeaders({
	// 	'Cache-Control': 'public, max-age=0, s-maxage=60',
	// });

	return json(posts, { status: 200 });
};
