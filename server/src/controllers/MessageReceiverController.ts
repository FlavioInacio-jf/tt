import { Request, Response } from "express";
import { MessageReceiverService } from "../services/MessageReceiverService";



export class MessageReceiverController {
  async create (request: Request, response: Response) {
    const { message, id_subscriber } = request.body;

    const messageReceiverService = new MessageReceiverService()

    const messageReceiverRegister = await messageReceiverService.create({
      message,
      id_subscriber
    })

    return response.json(messageReceiverRegister).status(200).end()
  }

  async delete (request: Request, response: Response) {
    const { id_message_receiver } = request.params;

    const messageReceiverService = new MessageReceiverService()
    const messageReceiverDelete = await messageReceiverService.delete(id_message_receiver);

    return response.json(messageReceiverDelete)
  }

  async show (request: Request, response: Response) {
    const { id_message_receiver } = request.params;

    const messageReceiverService = new MessageReceiverService();
    const messageReceiver = await messageReceiverService.show(id_message_receiver);

    return response.json(messageReceiver)
  }

  async index (request: Request, response: Response) {
    const messageReceiverService = new MessageReceiverService();
    const messagesReceiver = await messageReceiverService.index();

    return response.json(messagesReceiver)
  }

}