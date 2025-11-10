FROM node:18-alpine
WORKDIR /app
COPY package.json ./
COPY app.js ./
EXPOSE 80
ENV PORT=80
CMD ["node", "app.js"]
