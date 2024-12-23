# Next.js Auth0 Authentication App

このプロジェクトは、Next.js 13+ App RouterとAuth0を使用した認証システムの実装例です。

## 機能

- Auth0を使用した認証
- プロフィールページ
- 保護されたルート
- レスポンシブなUI
- TypeScript対応

## 技術スタック

- Next.js 13+ (App Router)
- Auth0
- TypeScript
- Tailwind CSS

## セットアップ手順

### 1. プロジェクトのセットアップ

```bash
# プロジェクトのクローン
git clone [your-repo-url]
cd auth-app

# 依存関係のインストール
npm install
```

### 2. Auth0のセットアップ

1. [Auth0ダッシュボード](https://manage.auth0.com/)にアクセス
2. 新しいアプリケーションを作成（Regular Web Application）
3. 以下の設定を行う：
   - Allowed Callback URLs: `http://localhost:3000/api/auth/callback`
   - Allowed Logout URLs: `http://localhost:3000`
   - Allowed Web Origins: `http://localhost:3000`

### 3. 環境変数の設定

`.env.local`ファイルをプロジェクトのルートに作成し、以下の変数を設定：

```env
AUTH0_SECRET='use [openssl rand -hex 32] to generate a 32 bytes value'
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='https://[your-auth0-domain].auth0.com'
AUTH0_CLIENT_ID='your-auth0-client-id'
AUTH0_CLIENT_SECRET='your-auth0-client-secret'
```

### 4. ファイル構造

```
auth-app/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...auth0]/
│   │           └── route.ts
│   ├── profile/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── src/
│   └── components/
│       ├── buttons/
│       │   └── login-button.tsx
│       └── navigation/
│           └── nav-bar.tsx
├── middleware.ts
└── .env.local
```

### 5. 主要コンポーネント

1. **Auth0ハンドラー** (`app/api/auth/[auth0]/route.ts`):
   - Auth0の認証フローを処理

2. **ミドルウェア** (`middleware.ts`):
   - 保護されたルートへのアクセス制御
   - 未認証ユーザーのリダイレクト

3. **ナビゲーションバー** (`src/components/navigation/nav-bar.tsx`):
   - ユーザー状態に応じたナビゲーション表示
   - ログイン/ログアウトボタン

4. **プロフィールページ** (`app/profile/page.tsx`):
   - 認証済みユーザーの情報表示
   - 保護されたルートの例

## 開発サーバーの起動

```bash
npm run dev
```

アプリケーションは http://localhost:3000 で利用可能になります。

## 保護されたルート

以下のパスは自動的に保護されます：

- `/profile`
- `/dashboard/*`
- `/api/protected/*`

未認証ユーザーは自動的にログインページにリダイレクトされます。

## デプロイ

1. 本番環境用の環境変数を設定
2. Auth0ダッシュボードで本番環境のURLを許可リストに追加
3. デプロイ先のプラットフォーム（Vercel推奨）にデプロイ

## 注意点

- `use client`ディレクティブを使用するコンポーネントは、クライアントサイドでのみ実行される機能に限定
- 環境変数は必ず`.env.local`で管理し、公開リポジトリにコミットしない
- 本番環境では適切なセキュリティヘッダーの設定を確認

## ライセンス

MIT

## 参考リンク

- [Auth0 Next.js SDK](https://github.com/auth0/nextjs-auth0)
- [Next.js Documentation](https://nextjs.org/docs)
- [Auth0 Documentation](https://auth0.com/docs)
