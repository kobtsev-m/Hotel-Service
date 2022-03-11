import { Sequelize } from 'sequelize';
import configs from '../configs';

const sequelize = new Sequelize(configs.db.name, configs.db.user, configs.db.password, {
  host: configs.db.host,
  port: configs.db.port,
  dialect: 'postgres',
  logging: false
});

export default sequelize;
