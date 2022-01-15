import { getCustomRepository } from "typeorm";
import { SubscribersRepositories } from "../repositories/SubscribersRepositories";

interface ISubscriberRquest {
  subscriber: string;
  topic: string;
  oos: number;
  color: string;
  id_client: string;
}
export class SubscriberService {
  async create ({subscriber, topic, oos, color, id_client}: ISubscriberRquest) {

    const subscribersRepository = getCustomRepository(SubscribersRepositories);

    const subscriberAlredyExists = await subscribersRepository.findOne({subscriber})

    if (subscriberAlredyExists) {
      throw new Error("Subscriber alredy exists")
    }

    const subscriberRegister = subscribersRepository.create({
      subscriber,
      topic,
      oos,
      color,
      clientSubscriber: id_client
    });

    await subscribersRepository.save(subscriberRegister);
    return subscriberRegister;

  }

  async delete (id_subscriber: string) {
    const subscribersRepository = getCustomRepository(SubscribersRepositories);

    if (!id_subscriber) {
      throw new Error("Id subscriber is invalid")
    }

    const subscriberDelete = subscribersRepository.delete(id_subscriber)

    return subscriberDelete;
  }

  async show (id_subscriber: string) {
    const subscribersRepository = getCustomRepository(SubscribersRepositories);

    if (!id_subscriber) {
      throw new Error("Id subscriber is invalid")
    }

    const subscriber = subscribersRepository.findOne(id_subscriber);

    return subscriber;
  }

  async index () {
    const subscribersRepository = getCustomRepository(SubscribersRepositories);

    const subscribers = subscribersRepository.find()
    return subscribers;
  }
}