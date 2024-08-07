# ベースイメージの指定
FROM node:18

# 作業ディレクトリの作成
WORKDIR /usr/src/app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# アプリケーションのソースをコピー
COPY . .

# アプリケーションをビルド（必要な場合）
# RUN npm run build

# アプリケーションのポートを指定
EXPOSE 3000

# アプリケーションの起動コマンド
CMD ["npm", "start"]
