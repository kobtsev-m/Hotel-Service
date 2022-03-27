import 'dotenv/config';
import path from 'path';

export = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: [path.join(__dirname, 'app', 'db', 'entities', '!(index){.js,.ts}')],
  migrations: [path.join(__dirname, 'app', 'db', 'migrations', '*{.js,.ts}')],
  synchronize: false
};
