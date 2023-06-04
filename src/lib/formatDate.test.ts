import { describe, it, expect } from 'vitest';
import { formatDate } from './formatDate';

describe('formatDate function test', () => {
	it('should receive a date and format it to a long date string text', () => {
		const date = new Date(2023, 5, 4);
		const formattedDate = formatDate(date);
		expect(formattedDate).toBe('June 4, 2023');
	});
});
