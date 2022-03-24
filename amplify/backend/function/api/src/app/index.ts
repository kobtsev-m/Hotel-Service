import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import awsServerlessExpressMiddleware from 'aws-serverless-express/middleware';
import configs from './configs';
import { connectToDb } from './db';
import { initControllers } from './contollers';

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
