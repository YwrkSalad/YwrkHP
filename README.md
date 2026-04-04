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

- App Router を使用
- React Compiler 有効 (`reactCompiler: true`)
- パッケージマネージャ: yarn

## 2. 実行方法

```bash
# 開発サーバー起動
yarn dev

# ビルド
yarn build

# フォーマット
yarn fmt

# Lint
yarn lint
```

開発サーバー起動後、[http://localhost:3000](http://localhost:3000) をブラウザで開く。

## 3. データベース

### 3.1. セットアップ

PostgreSQL にユーザーと DB を作成する。

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

## 4. デプロイ (Xserver VPS)

### 4.1. 構成

```
ywrk.org
  └─ nginx (リバースプロキシ)
       └─ localhost(127.0.0.1):3939
            └─ pm2 (yarn start を永続化)
```

### 4.2. セットアップ

事前に [3.1. データベース > セットアップ](#31-セットアップ) を参照すること。

1. クローン

```bash
git clone https://github.com/YwrkSalad/YwrkHP.git
cd YwrkHP
```

2. 依存関係インストール・ビルド

```bash
yarn
yarn build
```

3. pm2 で起動

```bash
# ポート3939でyarn startをpm2に登録して起動
PORT=3939 pm2 start yarn --name ywrk-hp -- start
```

4. 自動起動の設定

```bash
# 現在のプロセス一覧を保存し、サーバー再起動時に自動起動するよう OS に登録
pm2 save && pm2 startup
```

### 4.3. 更新手順

```bash
git pull
yarn build
pm2 reload ywrk-hp  # ゼロダウンタイムで再起動
```
