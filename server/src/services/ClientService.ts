import { getCustomRepository } from "typeorm";
import { ClientsRepositories } from "../repositories/ClientsRepositories";
import { hash  } from "bcryptjs";


interface IClientRequest {
  client : string;
  protocol : string;
  host : string;
  password: string;
  icon : number;
  isWorking : boolean;
}

export class ClientService {
  async create ({client, protocol, host, icon, isWorking, password}: IClientRequest) {
    const clientsRepository = getCustomRepository (ClientsRepositories);

    const clientAlredyExists = await clientsRepository.findOne({
      client
    });

    if (clientAlredyExists ) {
      throw new Error("Client alredy exists");
    }

    if (client.length > 15) {
      throw new Error("Client has more 15 characters")
    }

    if (host.length < 5) {
      throw new Error("Host has less 5 characters")
    }


    const passwordHash = await hash(password, 8);

    const clientRegister = clientsRepository.create(
      {
        client,
        protocol,
        host,
        password : passwordHash,
        icon,
        isWorking
      });
    await clientsRepository.save(clientRegister);
    return clientRegister;

  }

  async delete (id_client: string) {
    const clientsRepository = getCustomRepository(ClientsRepositories);

    if (!id_client) {
      throw new Error("Id client is invalid")
    }
    const userDelete = await clientsRepository.delete({
      id: id_client
    })

    return userDelete;
  }

  async show (id_client : string) {
    const clientsRepository = getCustomRepository(ClientsRepositories);

    if (!id_client) {
      throw new Error("Id client is invalid")
    }

    const clientById = clientsRepository.findOne(id_client)
    return clientById;

  }

  async index () {
    const clientsRepository = getCustomRepository(ClientsRepositories);

    const clients = clientsRepository.find();
    return clients;
  }

  async update (id_client: string, ...client) {
    const clientsRepository = getCustomRepository(ClientsRepositories);

    if (!id_client) {
      throw new Error("Id client is invalid")
    }
  }
}