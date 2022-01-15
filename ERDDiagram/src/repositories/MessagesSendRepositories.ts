import { EntityRepository, Repository } from "typeorm";
import { MessageSend } from "../entities/MessageSend";

@EntityRepository(MessageSend)
export class MessagesSendRepositories extends Repository <MessageSend> {}