<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
  A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.
</p>

<p align="center">
   <a href="https://nodejs.org/" target="_blank"><img src="https://img.shields.io/static/v1?label=Node&message=v18.19&color=green" alt="Node.js Version" /></a>
  <a href="https://www.npmjs.com/" target="_blank"><img src="https://img.shields.io/static/v1?label=npm&message=v9.2&color=red" alt="npm Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

This project is being created to practice using NestJS. I decided to recreate a project that was originally built with Node.js, but now utilizing NestJS concepts. The new project includes additional features such as login, authorization for users, and also involves creating a frontend.

## TODO

- [ ] Metric for GET route
- [ ] User model with Prisma
- [ ] User authentication (signup)
- [ ] Frontend for users
- [ ] Admin dashboard

## Routes

- **Create short link**
  **POST** `/links`

- **Get a link by code**
  **GET** `/links/:code`

- **Redirect short link to original URL**
  **GET** `/links/redirect/:code`

- **Get all link data for a user**
  **GET** `/links/user/:id`

- **Update short link**
  **PUT** `/links/user/:id`

## Installation

```bash
  npm install

## Installation

```bash
  npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Project Structure

```md
    src/
    |-- database/
    |   |-- prisma.service.ts
    |-- links/
    |   |-- dto/
    |   |   |-- createLink.dto.ts
    |   |   |-- updateLink.dto.ts
    |   |   |-- link.dto.ts
    |   |
    |   |-- entities/
    |   |   |-- link.entity.ts 
    |   |-- link.controller.ts
    |   |-- link.service.ts
    |
    |-- prisma/
    |   |-- migrations
    |   |-- dev.db
    |   |-- schema.prisma
    |-- app.controller.ts
    |-- app.module.ts
    |-- main.ts    
```

## Prisma Schema

```sql
model Link {
  id          String   @id @default(uuid())
  code        String   @unique
  originalUrl String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

```
