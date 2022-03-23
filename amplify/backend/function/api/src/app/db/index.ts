import { createConnection } from 'typeorm';

export const connectToDb = async () => {
  try {
    const connection = await createConnection();
    console.log('Connected to db!');
    return connection;
  } catch (e) {
    console.log('Unable to connect to db:', e.message);
    return null;
  }
};
