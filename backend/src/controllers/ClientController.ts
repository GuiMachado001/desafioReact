import { Request, Response } from "express";
import { ClientService } from "../services/ClientService";

const clientService = new ClientService();

export class ClientController {
    static async create(req: Request, res: Response) {
        try {
            const client = await clientService.createClient(req.body);
            return res.status(201).json(client);
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }

    static async getAll(req: Request, res: Response) {
        try {
            const clients = await clientService.getClients();
            return res.status(200).json(clients);
        } catch (error) {
            return res.status(500).json({ message: "Erro ao buscar clientes" });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const id = req.params.id as string;
            
            const client = await clientService.updateClient(id, req.body);
            return res.status(200).json(client);
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }
}