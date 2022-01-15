import { getCustomRepository } from "typeorm";
import { MessagesSendRepositories } from "../repositories/MessagesSendRepositories";

interface IMessageSendRequest {
  message: string;
  id_publish: string;
}

export class MessageSendService {
  async create ({ message, id_publish }: IMessageSendRequest) {

    const messagesSendRepository = getCustomRepository(MessagesSendRepositories);

    if (message.length < 1) {
      throw new Error("Message is invalid")
    }

    const messageSendRegister = messagesSendRepository.create({
      message,
      PublisheMessageSend: id_publish
    });

    await messagesSendRepository.save(messageSendRegister);
    return messageSendRegister;
  }

  async delete (id_message_send: string) {
    const messagesSendRepository = getCustomRepository(MessagesSendRepositories);

    if (!id_message_send) {
      throw new Error("Id message send is invalid");
    }

    const messageSendDelete = messagesSendRepository.delete(id_message_send);

    return messageSendDelete;
  }

  async show (id_message_send: string) {
    const messagesSendRepository = getCustomRepository(MessagesSendRepositories);

    if (!id_message_send) {
      throw new Error("Id message send is invalid");
    }

    const messageSend = messagesSendRepository.findOne(id_message_send);
    return messageSend;
  }

  async index () {
    const messagesSendRepository = getCustomRepository(MessagesSendRepositories);

    const messagesSend = messagesSendRepository.find();
    return messagesSend;
  }
}