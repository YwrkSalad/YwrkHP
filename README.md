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
| [Firebase Realtime Database](https://firebase.google.com/products/realtime-database)                                         | -          | ページビューカウンター      |

- Node.js 22 以上
- App Router を使用
- React Compiler 有効 (`reactCompiler: true`)
- パッケージマネージャ: yarn
- 本番環境VPS OS: Arch Linux (Xserver VPS)

## 2. Firebase Realtime Database

ページへのアクセスを記録し、今日のページビュー数をサイト上に表示するために使用する。

Admin SDK (`firebase-admin`) を使用し、サーバーサイドでのみアクセスする。

<details>
<summary>2.1. セットアップ</summary>

Firebase Console → Project Settings → Service accounts → "Generate new private key" で Service Account JSON を取得する。

`.env` に以下を設定する：

```env
FIREBASE_SERVICE_ACCOUNT_JSON={"type":"service_account","project_id":"..."}
FIREBASE_DATABASE_URL=https://your-project-default-rtdb.asia-southeast1.firebasedatabase.app
ADMIN_PASSWORD=<set-secret-password>
ADMIN_TOKEN_MODULUS=<set-secret-integer>
```

`FIREBASE_SERVICE_ACCOUNT_JSON` は JSON を1行に展開した文字列を設定すること。
`ADMIN_TOKEN_MODULUS` は公開しない秘密値を設定すること（数値）。

なお、認証情報は管理者 elsy0111 に問い合わせること。

</details>

## 3. 実行方法 (ローカル環境)

事前に [2.1. Firebase > セットアップ](#21-セットアップ) を参照すること。

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
<summary>3.3. その他開発用コマンド (fmt, lint, build)</summary>

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

## 4. 訪問者命名アルゴリズム

名前は `形容詞-名詞顔文字` の形式（例: `azure-brook😀`）。

**語彙**

| 要素 | 数 |
|---|---|
| 形容詞 | 128 |
| 名詞 | 128 |
| 顔文字 | 16 |
| ユニーク名の総数 | 262,144 |

**インデックス決定**

訪問者を初回訪問時刻の昇順で並べ、0 から通し番号 `i` を振る。

**乗算置換（Multiplicative Permutation）**

単純に `i` をそのまま使うと連続する訪問者が同じ `形容詞-名詞` を持ってしまう。  
そのため `i` を以下の式でスクランブルする。

```
f(i) = (i × M) mod N
```

- `N = 128 × 128 × 16 = 262,144 = 2^18`
- `M` は奇数定数（奇数であれば `gcd(M, 2^18) = 1` が保証される）
- M の各ビット層への寄与が非ゼロとなるよう設計し、三要素が全て変化する

**デコード**

```
adj     = f(i) % 128           // 形容詞インデックス
noun    = (f(i) >> 7) % 128    // 名詞インデックス
kaomoji = f(i) >> 14           // 顔文字インデックス
```

これにより連続する訪問者は三要素が全てバラバラの名前を持ち、かつ 262,144 人目で初めて名前が一巡する。

## 5. デプロイ (本番環境VPS)

<details>
<summary>5.1. セットアップ (済)</summary>

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
<summary>5.2. 更新手順</summary>

```bash
git pull
yarn install
yarn build
pm2 reload ywrk-hp        # ゼロダウンタイムで再起動
```

</details>
