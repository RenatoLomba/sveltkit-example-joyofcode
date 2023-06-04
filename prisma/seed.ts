import { PrismaClient } from '@prisma/client';

import { slugify } from '../src/lib/slugify';

const db = new PrismaClient();

interface Post {
	title: string;
	body: string;
}

async function getPosts(): Promise<Post[]> {
	const response = await fetch('https://dummyjson.com/posts');
	const { posts } = await response.json();
	return posts;
}

async function execute() {
	const posts = await getPosts();

	await Promise.all(
		posts.map(async (post) => {
			await db.post.create({
				data: {
					title: post.title,
					content: post.body,
					slug: slugify(post.title),
				},
			});
		}),
	);
}

execute();
