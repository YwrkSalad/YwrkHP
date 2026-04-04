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

```bash
# リポジトリをクローン
git clone <repo-url>
cd ywrk

# 依存関係インストール・ビルド
yarn
yarn build

# pm2 でポート 3939 に永続起動
PORT=3939 pm2 start yarn --name ywrk-hp -- start

# サーバー再起動後も自動起動するよう登録
pm2 save
pm2 startup
```

### 更新手順

```bash
# 最新コードを取得
git pull

# 再ビルド
yarn build

# ゼロダウンタイムで再起動
pm2 reload ywrk-hp
```

### nginx 設定例

```nginx
server {
    listen 80;
    server_name ywrk.org www.ywrk.org;

    location / {
        proxy_pass http://localhost:3939;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

SSL は Certbot 等で別途設定すること。
