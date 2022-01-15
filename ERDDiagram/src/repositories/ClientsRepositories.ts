import { EntityRepository, Repository } from "typeorm";
import { Client } from "../entities/Client";

@EntityRepository(Client)
export class ClientsRepositories extends Repository <Client> {}

