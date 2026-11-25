export const ERROR_MESSAGES = {
  EMPTY_NAME: '名前が空です',
} as const;

export interface GreetOptions {
  /** 名前の後ろに付ける敬称 */
  honorific?: string;
}

/**
 * サービスの画面に出す挨拶文を作る。
 */
export function greet(name: string, options: GreetOptions = {}): string {
  if (name.trim() === '') {
    throw new Error(ERROR_MESSAGES.EMPTY_NAME);
  }
  const honorific = options.honorific ?? '様';
  return `こんにちは、${name} ${honorific}`;
}
