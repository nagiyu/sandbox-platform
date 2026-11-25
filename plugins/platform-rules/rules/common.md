# サービス共通の鉄則 (platform-rules plugin から配布)

この文面は sandbox-platform の plugin が、セッションの開始時に差し込んでいる。
リポジトリごとの CLAUDE.md には、そのサービス固有のことだけを書く。

- 出力 (コミットメッセージ・PR・コメント) は日本語で書く
- エラーメッセージは日本語にし、`ERROR_MESSAGES` に定数化する
- `@nagiyu/sandbox-*` のパッケージと `nagiyu/sandbox-platform` の reusable workflow は、このリポジトリでは直さない。直したいときは sandbox-platform 側で直し、版を上げて取り込む
