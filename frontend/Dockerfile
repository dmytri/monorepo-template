# @todo use hash instead of label for suply chain integrity
FROM node:lts-alpine as dev
WORKDIR /app
COPY site/package.json .
RUN npm install
COPY site .
CMD ["npm", "run", "dev", "--", "--host", "--port", "3000"]

FROM dev AS build
WORKDIR /app
RUN npm run build

FROM joseluisq/static-web-server:2-alpine AS run
COPY --from=build /app/dist /app/static/
CMD ["static-web-server", "--port", "3000", "--root", "/app/static"]
