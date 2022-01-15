import { EntityRepository, Repository } from "typeorm";
import { MessageReceiver } from "../entities/MessageReceive";

@EntityRepository(MessageReceiver)
export class MessagesReceiverRepositories extends Repository <MessageReceiver> {}