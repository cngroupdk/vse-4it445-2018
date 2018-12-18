# Backend

## Requirements

- Node.js v8.12.0 or later
- `yarn` (`npm install --global yarn`)
- MySQL database

## Install

Copy `./src/config/config.js.example` to `src/config/config.js` and change it to your MySQL credentials.

```sh
yarn install
yarn sequelize db:migrate
yarn sequelize db:seed:all
```

## Run Local Dev Server

```sh
yarn dev
```

## Run Local Production Server

```sh
yarn build
yarn start
```

Builds and starts the server.

## Production Build

```sh
yarn build
```

## Production Build Watch

```sh
yarn build:watch
```

Runs build each time `.js` file in `./src` is changed.

**Useful for `*.vse.handson.pro` hosting.**

## See Server Logs

```sh
tail -F log/app.log
```
