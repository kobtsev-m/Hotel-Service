import awsServerlessExpressMiddleware from 'aws-serverless-express/middleware';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import configs from './configs';
import { initControllers } from './contollers';
import { connectToDb } from './db';

const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());
app.use(cors({ allowedHeaders: ['*'] }));

initControllers(app);
connectToDb();

app.listen(configs.server.port, () => {
  console.log(`Server started on http://localhost:${configs.server.port}`);
});

export default app;
