import "reflect-metadata";
import { DataSource } from "typeorm";
import { Client } from "./entities/Client";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: 5432,
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "desafio_db",
    synchronize: true,
    logging: false,
    entities: [Client],
});