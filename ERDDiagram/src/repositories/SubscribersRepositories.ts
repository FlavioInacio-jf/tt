import { EntityRepository, Repository } from "typeorm";
import { Subscriber } from "../entities/Subscriber";

@EntityRepository(Subscriber)
export class SubscribersRepositories extends Repository <Subscriber> {}