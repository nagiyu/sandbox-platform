# sandbox-platform

サービスのリポジトリへ「配る側」の実験用リポジトリ。サービス側は [sandbox-service-template](https://github.com/nagiyu/sandbox-service-template) から作る。

## 配っているもの

| 資産 | 置き場所 | 配り方 | サービス側に残るもの |
|---|---|---|---|
| ワークフローの中身 | `.github/workflows/service-verify.yml` | reusable workflow (タグ `v1`) | 呼び出すだけの yml |
| ワークフローの部品 | `.github/actions/setup-node/` | composite action (タグ `v1`) | なし |
| tsconfig の基本形 | `packages/tsconfig/` | GitHub Packages (`@nagiyu/sandbox-tsconfig`) | `extends` の 1 行 |
| 共通ロジック | `packages/common/` | GitHub Packages (`@nagiyu/sandbox-common`) | 依存の 1 行 |
| Renovate の方針 | `renovate/default.json` | Renovate の shared preset | `renovate.json` の 1 行 |
| Claude の運用ルール・skill | `plugins/platform-rules/` | Claude Code の plugin marketplace (`.claude-plugin/marketplace.json`) | `.claude/settings.json` の有効化 |

## 更新の流し方

- **パッケージ**: `packages/*/package.json` の `version` を上げて `master` に push すると、`publish.yml` がその版を publish する
- **ワークフロー / action**: 互換を保つ変更は `v1` タグを付け直す。壊す変更は `v2` を切り、サービス側がタグを上げて取り込む
- **plugin**: `plugins/platform-rules/` を直して push すると、各サービスのセッションが次に plugin を更新したときに届く
