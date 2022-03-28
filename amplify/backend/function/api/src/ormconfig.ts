import 'dotenv/config';
import path from 'path';

const filesExt = process.env.MODE === 'local' ? '.ts' : '.js';

export = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: [path.join(__dirname, 'app', 'db', 'entities', `!(index)${filesExt}`)],
  migrations: [path.join(__dirname, 'app', 'db', 'migrations', `*${filesExt}`)],
  synchronize: false
};
