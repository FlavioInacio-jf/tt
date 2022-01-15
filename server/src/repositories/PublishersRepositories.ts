import { EntityRepository, Repository } from "typeorm";
import { Publisher } from "../entities/Publisher";

@EntityRepository(Publisher)
export class PublishersRepositories extends Repository <Publisher> {}