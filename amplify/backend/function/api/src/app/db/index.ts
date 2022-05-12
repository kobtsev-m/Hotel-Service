import { Connection, createConnection } from 'typeorm';

class Database {
  private connection: Connection | null;

  constructor() {}

  async connect() {
    if (this.connection) {
      return;
    }
    try {
      this.connection = await createConnection();
    } catch (e) {
      console.log('Unable to connect to db:', e.message);
    }
  }
}

export default new Database();
