# ywrk

## 1. アーキテクチャ

| 技術                                                                                                                         | バージョン | 用途                        |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------- | --------------------------- |
| [Next.js](https://nextjs.org)                                                                                                | 16         | フレームワーク (App Router) |
| [React](https://react.dev)                                                                                                   | 19         | UI                          |
| [TypeScript](https://www.typescriptlang.org)                                                                                 | 5          | 型付け                      |
| [Tailwind CSS](https://tailwindcss.com)                                                                                      | 4          | スタイリング                |
| [Prettier](https://prettier.io) + [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) | -          | フォーマッタ                |
| [ESLint](https://eslint.org)                                                                                                 | 9          | Linter                      |
| [Prisma](https://www.prisma.io)                                                                                              | 7          | ORM                         |

- App Router を使用
- React Compiler 有効 (`reactCompiler: true`)
- パッケージマネージャ: yarn
- 本番環境VPS OS: Arch Linux (Xserver VPS)

## 2. データベース

ページへのアクセスを記録し、今日のページビュー数をサイト上に表示するために使用する。

接続には `@prisma/adapter-pg` を使用し、`.env` の3変数から接続文字列を構成する。

<details>
<summary>2.1. セットアップ (ローカル環境)</summary>

`prisma/docker-compose.yml` で PostgreSQL 18 を Docker で起動する。

`.env` に以下を設定する：

```env
POSTGRES_USER=ywrk
POSTGRES_PASSWORD=パスワード
POSTGRES_DB=ywrkdb
```

なお、パスワードは管理者 elsy0111 に尋ねること。

```bash
docker compose -f prisma/docker-compose.yml up -d
```

</details>

<details>
<summary>2.2. セットアップ (本番環境VPS)</summary>

本番環境VPSでは PostgreSQL 18 をネイティブで動かす。セットアップは管理者が行う。

`.env` に同様の3変数を設定すること。

</details>

## 3. 実行方法 (ローカル環境)

事前に [2.1. データベース > セットアップ](#21-セットアップ) を参照すること。

<details>
<summary>3.1. セットアップ</summary>

1. クローン

```bash
git clone https://github.com/YwrkSalad/YwrkHP.git
cd YwrkHP
```

2. 依存関係インストール

```bash
yarn
```

</details>

<details>
<summary>3.2. サーバー起動</summary>

開発サーバーを起動する。

```bash
yarn dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開く。

</details>

<details>
<summary>3.3. その他コマンド</summary>

フォーマット

```bash
yarn fmt
```

Lint

```bash
yarn lint
```

ビルド

```bash
yarn build
```

</details>

## 4. デプロイ (本番環境VPS)

<details>
<summary>4.1. セットアップ (済)</summary>

DB 起動

```bash
docker compose -f prisma/docker-compose.yml up -d
```

pm2 で起動

```bash
# ポート3939でyarn startをpm2に登録して起動
PORT=3939 pm2 start yarn --name ywrk-hp -- start
```

自動起動の設定

```bash
# 現在のプロセス一覧を保存し、サーバー再起動時に自動起動するよう OS に登録
pm2 save && pm2 startup
```

</details>

<details>
<summary>4.2. 更新手順</summary>

```bash
git pull
yarn install
npx prisma generate  # Prismaクライアントを再生成
yarn build
pm2 reload ywrk-hp  # ゼロダウンタイムで再起動
```

</details>
