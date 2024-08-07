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

# アプリケーションをビルド
RUN npm run build

# Nginxのベースイメージの指定
FROM nginx:alpine

# ビルドしたアプリケーションをコピー
COPY --from=0 /usr/src/app/.next /usr/share/nginx/html

# Nginxの設定ファイルをコピー（必要に応じて）
# COPY nginx.conf /etc/nginx/nginx.conf

# ポートを指定
EXPOSE 80

# Nginxの起動コマンド
CMD ["nginx", "-g", "daemon off;"]
