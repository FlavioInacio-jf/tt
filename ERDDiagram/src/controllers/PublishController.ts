import { Request, response, Response } from "express";
import { PublisherService } from "../services/PublisherService";


export class PublishController {
  async create (request: Request, response: Response) {
    const {publisher, topic, oos, color, id_client} = request.body;

    const publisherService = new PublisherService();

    const publisherRegister = await publisherService.create (
      {
        publisher,
        topic,
        oos,
        color,
        id_client
      })
      return response.json(publisherRegister)
  }

  async delete (request: Request, response: Response) {
    const { id_publisher } = request.params;

    const publisherService = new PublisherService();
    const publisherDelete = await publisherService.deleteByIdPublisher(id_publisher);

    return response.json(publisherDelete)
  }

  async show (request: Request, response: Response) {
    const { id_publisher } = request.params;

    const publisherService = new PublisherService();
    const publisher = await publisherService.show(id_publisher);

    return response.json(publisher)
  }

  async index (request: Request, response: Response) {
    const { id_client } = request.params;

    const publisherService = new PublisherService();
    const publishers = await publisherService.index(id_client);

    return response.json(publishers)
  }
}
