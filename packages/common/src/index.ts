export const ERROR_MESSAGES = {
  EMPTY_NAME: '名前が空です',
} as const;

/**
 * サービスの画面に出す挨拶文を作る。
 */
export function greet(name: string): string {
  if (name.trim() === '') {
    throw new Error(ERROR_MESSAGES.EMPTY_NAME);
  }
  return `こんにちは、${name} さん`;
}
