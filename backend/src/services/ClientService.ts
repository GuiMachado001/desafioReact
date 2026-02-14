import { AppDataSource } from "../data-source";
import { Client } from "../entities/Client";

export class ClientService {
    private clientRepository = AppDataSource.getRepository(Client);

    async createClient(data: Partial<Client>) {
        const emailExists = await this.clientRepository.findOneBy({ email: data.email });
        if (emailExists) {
            throw new Error("E-mail já cadastrado");
        }

        const client = this.clientRepository.create(data);
        return await this.clientRepository.save(client);
    }

    async getClients() {
        return await this.clientRepository.find();
    }

    async updateClient(id: string, data: Partial<Client>) {
        const client = await this.clientRepository.findOneBy({ id });
        
        if (!client) {
            throw new Error("Cliente não encontrado");
        }

        // Atualiza apenas os campos enviados
        this.clientRepository.merge(client, data);
        return await this.clientRepository.save(client);
    }
    async deleteClient(id: string) {
        const client = await this.clientRepository.findOneBy({ id });

        if (!client) {
            throw new Error("Cliente não encontrado");
        }

        return await this.clientRepository.remove(client);
    }
}