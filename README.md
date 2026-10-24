# Hotel Service

Full-stack web app for a hotel: apartments, services, statistics and user accounts.

![image](https://user-images.githubusercontent.com/44488666/166846945-3a8b7b80-82e1-41d9-bccb-1c641785a472.png)

<br />

![image](https://user-images.githubusercontent.com/44488666/166846291-9af6208a-2a99-474e-9a70-a4982d031c14.png)

<br />

![image](https://user-images.githubusercontent.com/44488666/166846392-6a24b6ff-cf14-481c-aab4-f1522977f28c.png)

<br />

![image](https://user-images.githubusercontent.com/44488666/166846501-bb4ecb53-fc17-4b7f-9337-f4fee09057b2.png)

## Features
- Pages: home, apartments, services, statistics, about, sign-in / sign-up
- Auth with Amazon Cognito (sign-up confirmation through a Lambda trigger)
- REST API on AWS Lambda + API Gateway (Express, TypeORM, PostgreSQL), JWT checked against Cognito keys
- Image storage on S3, progressive image loading on the client

## Stack
React, TypeScript, MobX, Bootstrap, AWS Amplify (Cognito, API Gateway, Lambda, S3), Express, TypeORM, PostgreSQL

## Run locally
```bash
yarn install
yarn start   # needs an Amplify environment (amplify pull) for the backend
```
