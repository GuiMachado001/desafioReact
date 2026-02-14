import "reflect-metadata";
import { DataSource } from "typeorm";
import { Client } from "./entities/Client";

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL, 
    synchronize: true, 
    logging: true,
    entities: [Client],
    ssl: {
        rejectUnauthorized: false
    }
});