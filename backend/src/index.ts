import "reflect-metadata";
import express from "express";
import cors from "cors";
import { AppDataSource } from "./data-source";
import routes from "./routes/routes";

const app = express();

// Middlewares globais
app.use(cors()); 
app.use(express.json());

// Rotas
app.use(routes);

// Inicialização
AppDataSource.initialize().then(() => {
    console.log("📦 Banco de dados conectado com sucesso!");
    
    app.listen(3000, () => {
        console.log("🚀 Servidor rodando na porta 3000");
    });
}).catch(error => console.log("Erro ao conectar no banco: ", error));