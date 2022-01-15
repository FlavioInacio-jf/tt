import { Request, Response } from "express";
import { MessageSendService } from "../services/MessageSendService";


export class MessageSendController {
  async create (request: Request, response: Response) {
    const { message, id_publish } = request.body;

    const messageSendService = new MessageSendService();

    const messageSendRegister = await messageSendService.create({
      message,
      id_publish
    })

    return response.json(messageSendRegister).status(200).end()

  }

  async delete (request: Request, response: Response) {
    const { id_message_send } = request.params;

    const messageSendService = new MessageSendService();
    const messageSendDelete = await messageSendService.delete(id_message_send);

    return response.json(messageSendDelete)
  }

  async show (request: Request, response: Response) {
    const { id_message_send } = request.params;

    const messageSendService = new MessageSendService();
    const messageSend =  await messageSendService.show(id_message_send)

    return response.json(messageSend)
  }

  async index (request: Request, response: Response) {
    const messageSendService = new MessageSendService();
    const messagesSend = await messageSendService.index()

    return response.json(messagesSend);
  }

}