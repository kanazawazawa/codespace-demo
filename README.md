# 🌟 シンプルWebアプリ - Express.js Demo

このプロジェクトは、Express.jsを使用して作成されたシンプルなWebアプリケーションです。

## 🚀 機能

- **API呼び出し**: Express.jsサーバーのAPIエンドポイントをテスト
- **ユーザー管理**: サンプルユーザーデータの表示
- **インタラクティブ要素**: 
  - カウンター機能
  - 背景色変更機能
- **メッセージボード**: リアルタイムメッセージ追加機能
- **レスポンシブデザイン**: モバイル対応

## 🛠️ セットアップ

1. 依存関係をインストール:
```bash
npm install
```

2. アプリケーションを開始:
```bash
npm start
```

3. ブラウザで `http://localhost:3000` を開く

## 📁 プロジェクト構造

```
├── server.js          # Express.js サーバー
├── package.json       # プロジェクト設定
├── public/            # 静的ファイル
│   ├── index.html     # メインページ
│   ├── style.css      # スタイルシート
│   └── script.js      # フロントエンド JavaScript
└── README.md          # このファイル
```

## 🔧 API エンドポイント

- `GET /api/hello` - 簡単なメッセージを返す
- `GET /api/users` - サンプルユーザー一覧を返す

## 🎨 特徴

- モダンなグラデーション背景
- アニメーション効果
- カード型レイアウト
- インタラクティブな要素
- レスポンシブデザイン

## 🚀 開発

開発サーバーを起動:
```bash
npm run dev
```

ESLintでコードをチェック:
```bash
npm run lint
```

ESLintで自動修正:
```bash
npm run lint:fix
```