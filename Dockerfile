FROM node:19.4-alpine3.16 as react-build
WORKDIR /app
COPY . .
RUN npm i --legacy-peer-deps
RUN npm run build

FROM nginx:1.23.3-alpine as production
COPY nginx.conf /etc/nginx/conf.d/configfile.template
COPY --from=react-build /app/build /usr/share/nginx/html
ENV PORT 8080
ENV HOST 0.0.0.0
EXPOSE 8080
CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"