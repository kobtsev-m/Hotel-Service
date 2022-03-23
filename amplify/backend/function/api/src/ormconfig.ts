import 'dotenv/config';

export = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: ['./app/db/entities/!(index).ts'],
  migrations: ['./app/db/migrations/*.ts'],
  cli: {
    entitiesDir: './app/db/entities',
    migrationsDir: './app/db/migrations'
  },
  synchronize: false
};
