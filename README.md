# sandbox-platform

サービスのリポジトリへ「配る側」の実験用リポジトリ。サービス側は [sandbox-service-template](https://github.com/nagiyu/sandbox-service-template) から作る。

## 配っているもの

| 資産 | 置き場所 | 配り方 | サービス側に残るもの |
|---|---|---|---|
| ワークフローの中身 | `.github/workflows/service-verify.yml` | reusable workflow (`v1.0.0` のような固定の版) | 呼び出すだけの yml |
| ワークフローの部品 | `.github/actions/setup-node/` | composite action (workflow と同じ版) | なし |
| tsconfig の基本形 | `packages/tsconfig/` | GitHub Packages (`@nagiyu/sandbox-tsconfig`) | `extends` の 1 行 |
| 共通ロジック | `packages/common/` | GitHub Packages (`@nagiyu/sandbox-common`) | 依存の 1 行 |
| Claude の運用ルール・skill | `plugins/platform-rules/` | Claude Code の plugin marketplace (`.claude-plugin/marketplace.json`) | `.claude/settings.json` の有効化 |

## 更新の流し方

版は人がリリースの単位で決める。出した版の中身は変えない。

- **パッケージ**: `packages/*/package.json` の `version` を上げて `master` に入れ、`publish.yml` を手で起動する
- **ワークフロー / action**: `release-workflows.yml` を版 (例 `v1.1.0`) を指定して手で起動する。サービスは完全な版で固定し、使うときに版を上げるコミットをする
- `v1` タグは固定の版に切り替える前のもので、もう動かさない
- **plugin**: `plugins/platform-rules/` を直して push すると、各サービスのセッションが次に plugin を更新したときに届く

## 変更履歴

### @nagiyu/sandbox-common

- **0.2.0 (破壊的変更)**: `greet` の既定の敬称を「さん」から「様」に変えた。従来の出力を保つには `greet(name, { honorific: 'さん' })` とする
