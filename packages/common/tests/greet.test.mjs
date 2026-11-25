import { test } from 'node:test';
import assert from 'node:assert/strict';
import { greet, ERROR_MESSAGES } from '../dist/index.js';

test('名前を挨拶文に埋め込む', () => {
  assert.equal(greet('nagiyu'), 'こんにちは、nagiyu さん');
});

test('空の名前はエラーにする', () => {
  assert.throws(() => greet(' '), { message: ERROR_MESSAGES.EMPTY_NAME });
});
