FROM node:18.8.0-alpine as builder
WORKDIR /app
COPY . .
RUN npm i --legacy-peer-deps
RUN npm run build

FROM nginx:1.23.1-alpine as production
ENV NODE_ENV production
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]