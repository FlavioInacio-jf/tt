import { getCustomRepository } from "typeorm";
import { PublishersRepositories } from "../repositories/PublishersRepositories";

interface IpublisherRequest {
  publisher: string;
  topic: string;
  oos: number;
  color: string;
  id_client: string;
}

export class PublisherService {
  async create ({publisher, topic, oos, color, id_client}: IpublisherRequest) {


    const publishersRepository = getCustomRepository(PublishersRepositories);

    const publisherAlredyExists = await publishersRepository.findOne({publish: publisher});

    if (publisherAlredyExists) {
      throw new Error("publisher alredy exists");
    }

    const publisherRegister = publishersRepository.create({
      publish: publisher,
      topic,
      oos,
      color,
      clientPublisher: id_client
    })

    await publishersRepository.save(publisherRegister);
    return publisherRegister;

  }

  async deleteByIdPublisher (id_publisher: string) {
    const publishersRepository = getCustomRepository(PublishersRepositories);

    if (!id_publisher) {
      throw new Error("Id publisher is invalid");
    }

    const publisherDelete = await publishersRepository.delete(id_publisher)

    return publisherDelete;
  }

  async deleteByIdClient (id_client: string) {
    const publishersRepository = getCustomRepository(PublishersRepositories);

    if (!id_client) {
      throw new Error("Id client is invalid");
    }
    const publishersDelete = await publishersRepository.delete({clientPublisher: id_client})
    return publishersDelete;
  }

  async show (id_publisher: string) {
    const publishersRepository = getCustomRepository(PublishersRepositories);

    if (!id_publisher) {
      throw new Error("Id publisher is invalid");
    }

    const publisher = await publishersRepository.findOne(id_publisher);
    return publisher;
  }

  async index (id_client: string) {
    const publishersRepository = getCustomRepository(PublishersRepositories);

    const publishers = await publishersRepository.find({
      clientPublisher: id_client
    })
    return publishers;
  }


}