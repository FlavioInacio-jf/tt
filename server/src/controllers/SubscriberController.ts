import { Request, Response } from "express";
import { SubscriberService } from "../services/SubscriberService";


export class SubscriberController {
  async create (request: Request, response: Response) {
    const {subscriber, topic, oos, color, id_client} = request.body

    const subscriberService = new SubscriberService();

    const subscriberRegister = await subscriberService.create(
      {
        subscriber,
        topic,
        oos,
        color,
        id_client
      }
    )
    return response.json(subscriberRegister)
  }

  async delete (request: Request, response: Response) {
    const { id_subscriber } = request.params;

    const subscriberService = new SubscriberService();
    const subscriberDelete = await subscriberService.delete(id_subscriber);

    return response.json(subscriberDelete)
  }

  async show (request: Request, response: Response) {
    const { id_subscriber } = request.params;

    const subscriberService = new SubscriberService();
    const subscriber =  await subscriberService.show(id_subscriber)


    return response.json(subscriber)
  }

  async index (request: Request, response: Response) {
    const subscriberService = new SubscriberService();
    const subscribers = await subscriberService.index();

    return response.json(subscribers)
  }
}