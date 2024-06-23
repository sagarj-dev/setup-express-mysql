import { DataSource } from "typeorm";

const database = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "testdb",
  entities: ["**/**.entity.js"],
  synchronize: true,
  logging: true,
});

export default database;
