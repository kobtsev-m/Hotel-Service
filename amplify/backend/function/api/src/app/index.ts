import awsServerlessExpressMiddleware from 'aws-serverless-express/middleware';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import configs from './configs';
import { initRoutes } from './contollers';

const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());
app.use(cors({ allowedHeaders: ['*'] }));

initRoutes(app);

app.listen(configs.server.port, () => {
  console.log(`Server started on http://localhost:${configs.server.port}`);
});

export default app;
