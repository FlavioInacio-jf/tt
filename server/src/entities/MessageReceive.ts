import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Subscriber } from "./Subscriber";

@Entity("messages_receiver")
export class MessageReceiver {

  @PrimaryColumn()
  readonly id : string

  @Column()
  message: string;

  @CreateDateColumn()
  created_at: Date;


  @JoinColumn({name: "id_subscriber"})
  @ManyToOne( ()=> Subscriber)
  SubscriberMessageReceiver: string;


  constructor () {
    if(!this.id) {
      this.id = uuid();
    }
  }
}