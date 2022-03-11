import 'dotenv/config';

const configs = {
  server: {
    port: process.env.SERVER_PORT ?? 8000
  },
  db: {
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  }
};

export default configs;
