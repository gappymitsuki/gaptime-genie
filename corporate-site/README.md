# 株式会社Gappy コーポレートサイト

株式会社Gappyの公式コーポレートサイトです。Next.js + TypeScript + Tailwind CSSで構築されています。

## 🚀 プロジェクト概要

インバウンド旅行者向け「タビナカ特化」のAIプラットフォームを提供する株式会社Gappyのコーポレートサイト。

### ブランドカラー

- **メインカラー**: ビビッドグリーン (`#00FF7D`)
- **ダークカラー**: `#111827`
- **トーン**: モダンで落ち着いた、BtoB SaaS向けデザイン

## 📁 プロジェクト構成

```
corporate-site/
├── app/                    # Next.js App Router
│   ├── about/             # Aboutページ
│   ├── cases/             # 導入事例ページ
│   ├── contact/           # お問い合わせページ
│   ├── news/              # ニュースページ
│   ├── solutions/         # Solutionsページ
│   │   ├── platform/      # Gappy Platform詳細
│   │   ├── partners/      # Gappy for Partners詳細
│   │   └── insight/       # Gappy Insight / Studio詳細
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # ホームページ
│   └── globals.css        # グローバルスタイル
├── components/            # 共通コンポーネント
│   ├── Header.tsx         # ヘッダーナビゲーション
│   └── Footer.tsx         # フッター
├── public/                # 静的ファイル
│   ├── gappy-logo.svg     # Gappyロゴ
│   └── favicon.ico        # ファビコン
└── package.json           # 依存関係
```

## 🛠️ 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **パッケージマネージャー**: npm

## 📦 セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### 3. ビルド

```bash
npm run build
```

### 4. 本番サーバーの起動

```bash
npm start
```

## 📄 ページ一覧

- **/** - ホームページ
- **/solutions** - プロダクト・ソリューション一覧
- **/solutions/platform** - Gappy Platform詳細
- **/solutions/partners** - Gappy for Partners詳細
- **/solutions/insight** - Gappy Insight / Studio詳細
- **/cases** - 導入事例・PoC
- **/about** - 会社概要
- **/news** - ニュース・プレスリリース
- **/contact** - お問い合わせフォーム

## 🎨 デザインシステム

### カラーパレット

```css
--gappy-green: #00FF7D;    /* メインブランドカラー */
--gappy-dark: #111827;      /* テキスト・背景 */
```

### タイポグラフィ

- システムフォント（-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, etc.）
- 見出し: ボールド、大きめのサイズ
- 本文: 読みやすいライン高さ（leading-relaxed）

### レスポンシブデザイン

- モバイルファースト
- ブレークポイント: sm, md, lg（Tailwind CSS標準）

## ✨ 主な機能

- **レスポンシブデザイン**: モバイル・タブレット・デスクトップ対応
- **モバイルメニュー**: ハンバーガーメニューで小画面でも快適
- **ドロップダウンナビ**: Solutionsメニューにサブメニュー
- **フィルタリング**: Casesページで業種・目的による絞り込み
- **お問い合わせフォーム**: バリデーション付きフォーム（モック送信）

## 🔧 カスタマイズ

### ロゴの変更

`public/gappy-logo.svg` を差し替えてください。

### カラーの変更

`tailwind.config.ts` の `colors` セクションを編集：

```typescript
colors: {
  'gappy-green': '#00FF7D',
  'gappy-dark': '#111827',
}
```

### 会社情報の更新

`components/Footer.tsx` と `app/about/page.tsx` を編集してください。

## 📝 ライセンス

© 2024 Gappy, Inc. All Rights Reserved.

## 📞 お問い合わせ

詳細は [お問い合わせフォーム](/contact) よりご連絡ください。
