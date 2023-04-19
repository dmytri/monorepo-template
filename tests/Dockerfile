FROM mcr.microsoft.com/playwright:focal
WORKDIR /app
COPY playwright/package.json /app/package.json
RUN npm install
COPY playwright .
CMD npm run playwright show-report reports -- --host="0.0.0.0" --port="3000"
