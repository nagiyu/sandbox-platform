---
name: platform-sync
description: sandbox-platform の更新 (npm パッケージの版、reusable workflow のタグ) をこのサービスに取り込むときに使う。
---

# platform の更新を取り込む

1. `package.json` の `@nagiyu/sandbox-*` の版を上げる。`npm install` で lockfile を更新する
2. `.github/workflows/*.yml` の `uses: nagiyu/sandbox-platform/...@vN` のタグを上げる
3. `npm run build` と `npm test` が通ることを確かめる
4. 破壊的変更 (メジャーの版上げ) のときは、sandbox-platform の README の変更履歴を読み、必要な書き換えをする

Renovate が更新 PR を立てている場合は、その PR の上で 3 と 4 だけを行う。
