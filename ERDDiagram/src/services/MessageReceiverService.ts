import { getCustomRepository } from "typeorm";
import { MessagesReceiverRepositories } from "../repositories/MessagesReceiverRepositories";

interface IMessageReceiverRequest {
  message: string;
  id_subscriber: string;
}

export class MessageReceiverService {
  async create ({message, id_subscriber}: IMessageReceiverRequest) {

    const messagesReceiverRepository =  getCustomRepository(MessagesReceiverRepositories);

    if (message.length < 1) {
      throw new Error("Message is invalid");
    }

    const messageReceiverRegister = messagesReceiverRepository.create({
      message,
      SubscriberMessageReceiver: id_subscriber
    });

    await messagesReceiverRepository.save(messageReceiverRegister);
    return messageReceiverRegister;
  }

  async delete (id_message_receiver: string) {
    const messagesReceiverRepository =  getCustomRepository(MessagesReceiverRepositories);

    if (!id_message_receiver) {
      throw new Error("Message is invalid");
    }

    const messageReceiverDelete = messagesReceiverRepository.delete(id_message_receiver);

    return messageReceiverDelete;
  }

  async show (id_message_receiver: string) {
    const messagesReceiverRepository =  getCustomRepository(MessagesReceiverRepositories);

    if (!id_message_receiver) {
      throw new Error("Message is invalid");
    }

    const messageReceiver = messagesReceiverRepository.findOne(id_message_receiver);
    return messageReceiver;

  }

  async index () {
    const messagesReceiverRepository =  getCustomRepository(MessagesReceiverRepositories);

    const messagesReceiver = messagesReceiverRepository.find()
    return messagesReceiver;
  }

}


