import express from 'express';
import bodyParser from 'body-parser';
import awsServerlessExpressMiddleware from 'aws-serverless-express/middleware';
import setRoutes from './routes';
import configs from './configs';

const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

setRoutes(app);

app.listen(configs.server.port, function () {
  console.log(`Server started on http://localhost/${configs.server.port}`);
});

export default app;
