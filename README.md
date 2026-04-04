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
- 本番環境 OS: Arch Linux (Xserver VPS)

## 2. データベース

ページへのアクセスを記録し、今日のページビュー数をサイト上に表示するために使用する。

なお、サーバー側のセットアップは完了済みである。

### 2.1. セットアップ (ローカル環境)

各自の OS に合わせて PostgreSQL をインストールすること。なお、本番環境は PostgreSQL 18 を使用している。

PostgreSQL にユーザーと DB を作成する。以下は Arch Linux での例。

```bash
# ユーザー作成
sudo -u postgres psql -c "CREATE USER ywrk WITH PASSWORD 'パスワード';"

# DB作成
sudo -u postgres psql -c "CREATE DATABASE ywrkdb OWNER ywrk;"
```

作成後、`.env` に接続情報を設定する：

```env
DATABASE_URL="postgresql://ywrk:パスワード@localhost:5432/ywrkdb?schema=public"
```

なお、パスワードは管理者 elsy0111 に尋ねること。

## 3. 実行方法 (ローカル環境)

事前に [2.1. データベース > セットアップ](#21-セットアップ) を参照すること。

### 3.1. セットアップ

1. クローン

```bash
git clone https://github.com/YwrkSalad/YwrkHP.git
cd YwrkHP
```

2. 依存関係インストール

```bash
yarn
```

### 3.2. サーバー起動

開発サーバーを起動する。

```bash
yarn dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開く。

### 3.3. その他コマンド

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

## 4. デプロイ (Xserver VPS)

### 4.1. セットアップ

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

### 4.2. 更新手順

```bash
git pull
yarn build
pm2 reload ywrk-hp  # ゼロダウンタイムで再起動
```
