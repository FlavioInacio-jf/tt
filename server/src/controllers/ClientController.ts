import { Request, Response } from "express";
import { ClientService } from "../services/ClientService";
import { PublisherService } from "../services/PublisherService";


export class ClientController {

  async create (request: Request, response: Response) {
    const { client, protocol, host, icon, isWorking, password } = request.body;

    const clientService = new ClientService();
    const clientRegister = await clientService.create(
      {
        client,
        protocol,
        host,
        password,
        icon,
        isWorking
      })

    return response.json(clientRegister)

  }

  async delete (request: Request, response: Response) {
    const { id_client } = request.params;

    const clientService = new ClientService();
    const publisherService = new PublisherService();

    await publisherService.deleteByIdClient(id_client)
    const clientDelete = await clientService.delete(id_client)

    return response.json(clientDelete)
  }


  async show (request: Request, response: Response) {
    const { id_client } = request.params;

    const clientService = new ClientService();
    const client =  await clientService.show( id_client );
    return response.json(client)
  }

  async index (request: Request, response: Response) {
    const clientService = new ClientService();
    const clients = await clientService.index();

    return response.json(clients)
  }
}
