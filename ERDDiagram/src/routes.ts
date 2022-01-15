import { Router } from "express";

import { ClientController } from "./controllers/ClientController"
import { PublishController } from "./controllers/PublishController";
import { SubscriberController } from "./controllers/SubscriberController";
import { MessageSendController } from "./controllers/MessageSendController";
import { MessageReceiverController } from "./controllers/MessageReceiverController";



export const routes = Router();

const clientController = new ClientController();

const publishController = new PublishController();
const subscriberController = new SubscriberController();
const messageSendController = new MessageSendController();
const messageReceiverController = new MessageReceiverController();

routes.post("/clients", clientController.create);
routes.get ("/clients", clientController.index);
routes.get("/clients/:id_client", clientController.show);
routes.delete("/clients/:id_client", clientController.delete);
//routes.put("/clients/:id_client", clientController.update);


routes.post("/publishers", publishController.create);
routes.get("/publishers/:id_client", publishController.index);
routes.get("/publishers/:id_publisher", publishController.show);
routes.delete("/publishers/:id_publisher", publishController.delete);
//routes.put("/publishers/:id_publish", publishController.update);

routes.post("/subscribers", subscriberController.create);
routes.get("/subscribers", subscriberController.index);
routes.get("/subscribers/:id_subscriber", subscriberController.show);
routes.delete("/subscribers/:id_subscriber", subscriberController.delete);
//routes.put("/subscribers/:id_subscriber", subscriberController.update);

routes.post("/messagesSend", messageSendController.create);
routes.get("/messagesSend", messageSendController.index);
routes.get("/messagesSend/:id_messageSend", messageSendController.show);
routes.delete("/messagesSend/:id_messageSend", messageSendController.delete);
//routes.put("/messagesSend/:id_messageSend", messageSendController.update);


routes.post("/messagesReceiver", messageReceiverController.create);
routes.get("/messagesReceiver", messageReceiverController.index);
routes.get("/messagesReceiver/:id_messageReceiver", messageReceiverController.show);
routes.delete("/messagesReceiver/:id_messageReceiver", messageReceiverController.delete);
//routes.put("/messagesReceiver/:id_messageReceiver", messageReceiverController.update);
