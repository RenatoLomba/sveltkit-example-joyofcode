import type { Post } from '@prisma/client';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, url }) => {
	const search = url.searchParams.get('search');

	let apiPath = '/api/posts-with-params?page=1&limit=10&order=asc';

	if (search) {
		apiPath = apiPath.concat(`&search=${search}`);
	}

	const response = await fetch(apiPath);
	const posts: Post[] = await response.json();
	return { posts };
};
