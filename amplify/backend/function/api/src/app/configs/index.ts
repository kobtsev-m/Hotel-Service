import 'dotenv/config';

const configs = {
  server: {
    port: process.env.SERVER_PORT ?? 8000
  },
  aws: {
    cognitoJwks: process.env.AWS_COGNITO_JWKS,
    userPoolId: process.env.AWS_USER_POOL_ID
  }
};

export default configs;
