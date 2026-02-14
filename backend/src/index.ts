import "reflect-metadata";
import express from "express";
import cors from "cors";
import { AppDataSource } from "./data-source";
import routes from "./routes/routes";

const app = express();


app.use(cors({
    origin: "http://localhost:5173", // Em produção, mude para a URL do seu frontend (ex: http://localhost:5173)
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.use(routes);

AppDataSource.initialize()
    .then(() => {
        console.log("📦 Banco de dados conectado com sucesso!");
        
        const PORT = 3000;
        app.listen(PORT, () => {
            console.log(`🚀 Servidor rodando na porta ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("❌ Erro fatal ao conectar no banco:", error);
    });