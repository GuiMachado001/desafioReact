import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "desafio_secreto";

export class AuthController {
    static login(req: Request, res: Response) {
        const { username, password } = req.body;

        if (username === "admin" && password === "admin") {
            const token = jwt.sign({ user: "admin" }, SECRET_KEY, { expiresIn: "1h" });
            return res.json({ token });
        }

        return res.status(401).json({ message: "Credenciais inválidas" });
    }
}