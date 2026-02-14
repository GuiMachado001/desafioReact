import "reflect-metadata";
import { DataSource } from "typeorm";
import { Client } from "./entities/Client";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "db.amoayolgwzhcjuxgjsdj.supabase.co",
    port: 5432,
    username: "postgres",
    password: "R*7D/E6$dcN2d@A", 
    database: "postgres",
    synchronize: true, 
    logging: true,
    entities: [Client],
    ssl: {
        rejectUnauthorized: false
    }
});