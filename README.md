# React Hands-on Practice Repository

![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

このリポジトリは、Reactの基礎から応用までを段階的に学習・実践するための練習問題集です。
`useState` や `useEffect` を用いたロジック構築、配列操作、非同期処理など、実務で頻出するパターンを網羅しています。

## 🚀 はじめに

現在の学習進捗に合わせて、以下のボリュームから問題を選択して挑戦できます。

- **[Vol. 1: Basic Patterns](./src/components/vol1/README.md)** (Q1 - Q30)
  - 基本的なState管理、条件分岐、リストレンダリング
- **[Vol. 2: Practical Logic](./src/components/vol2/README.md)** (Q31 - Q60)
  - 引数付きイベント、型の同期、複雑な副作用、UIコンポーネント設計

## 🛠 技術スタック

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Vanilla CSS

## 📖 学習の進め方

1. `src/components/vol(n)/` にある各問題のファイルを開きます。
2. 問題文の要件を満たすように実装を行います。
3. `src/data/questions.js` にコンポーネントを登録し、ブラウザで動作確認を行います。
4. 詳しい解説や学習の振り返りは **[LEARNING_LOG.md](./LEARNING_LOG.md)** を参照してください。

## 📂 ディレクトリ構成

```text
.
├── src/
│   ├── components/     # コンポーネント実装 & 問題文
│   │   ├── vol1/       # Vol.1 解答 & README.md
│   │   └── vol2/       # Vol.2 解答 & README.md
│   ├── data/           # 問題リスト定義
│   └── App.jsx         # メインエントリー
└── LEARNING_LOG.md     # 学習ログ・解説
```
