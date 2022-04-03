import 'dotenv/config';

const configs = {
  server: {
    port: +(process.env.SERVER_PORT ?? 8000)
  },
  aws: {
    cognitoJwks: process.env.COGNITO_JWKS
  }
};

export default configs;
