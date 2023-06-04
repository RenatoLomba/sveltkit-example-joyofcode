import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	throw error(400, {
		message: 'Oops! 🧨',
	});
};
