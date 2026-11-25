import { test } from 'node:test';
import assert from 'node:assert/strict';
import { greet, ERROR_MESSAGES } from '../dist/index.js';

test('既定の敬称は「様」にする', () => {
  assert.equal(greet('nagiyu'), 'こんにちは、nagiyu 様');
});

test('敬称を指定できる', () => {
  assert.equal(greet('nagiyu', { honorific: 'さん' }), 'こんにちは、nagiyu さん');
});

test('空の名前はエラーにする', () => {
  assert.throws(() => greet(' '), { message: ERROR_MESSAGES.EMPTY_NAME });
});
