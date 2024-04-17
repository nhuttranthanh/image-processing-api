# image-processing-api

## init package project

- npm init

## init typescript

- npx tsc

## package install

- npm i express jasmine jasmine-spec-reporter sharp supertest"": "^4.19.2"
- npm i --save-dev @eslint/js @types/express @types/jasmine @types/node @types/supertest eslint eslint-config-prettier eslint-plugin-prettier nodemon prettier ts-node typescript typescript-eslint

## build project

- npm run build

## unitTest project

- npm run jasmine

## run format

- npm run prettier

## run eslint

- npm run eslint

## How to use

Resize images available in the assets/images
Endpoint /api/images and requires three query params:
| Query Param | Value |
| filename | the filename of one of the images available in the folder|
| width | it should be a positive integer |
| height | it should be a positive integer |
