# ywrk

## アーキテクチャ

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

## セットアップ

```bash
yarn
```

## 実行方法

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

## デプロイ (Xserver VPS)

### 構成

```
ywrk.org
  └─ nginx (リバースプロキシ)
       └─ localhost:3939
            └─ pm2 (yarn start を永続化)
```

### 初回セットアップ

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

3. pm2 で永続起動

```bash
PORT=3939 pm2 start yarn --name ywrk-hp -- start
pm2 save     # 現在のプロセス一覧を保存
pm2 startup  # サーバー再起動時に pm2 が自動起動するよう OS に登録
```

### 更新手順

```bash
git pull
yarn build
pm2 reload ywrk-hp
```
