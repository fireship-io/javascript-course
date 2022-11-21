import { expect, test } from 'vitest';

import { cumSum } from './sum';
test('cumulative sum of an array', () => {
  expect(cumSum([1, 3, 5, 7])).toBe(16);
  expect(cumSum([-2, -4, -8])).toBe(-14);
});


import { search } from './bs';
test('binary search', () => {
  expect(search([1, 3, 5, 7], 5)).toBe(2);
  expect(search([1, 3, 5, 7], 2)).toBe(-1);
} );

import { LRU } from './lru';
test('LRU cache', () => {
  const cache = new LRU(2);
  cache.putItem(1, 1);
  cache.putItem(2, 2);
  expect(cache.getItem(1)).toBe(1);
  cache.putItem(3, 3);
  expect(cache.getItem(2)).toBe(undefined);
});