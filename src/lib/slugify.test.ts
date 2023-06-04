import { describe, it, expect } from 'vitest';

import { slugify } from './slugify';

describe('slugify function test', () => {
	it('should return a string lowercased and with dashes instead of spaces, and without any symbols or magic characters', () => {
		const title = "Pos't 1%$";
		const slug = slugify(title);
		expect(slug).toBe('post-1');
	});
});
