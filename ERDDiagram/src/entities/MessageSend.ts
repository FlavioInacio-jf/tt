import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Publisher } from "./Publisher";

@Entity("messages_send")
export class MessageSend {

  @PrimaryColumn()
  readonly id : string

  @Column()
  message: string;

  @CreateDateColumn()
  created_at: Date;


  @JoinColumn({name: "id_publishe"})
  @ManyToOne( ()=> Publisher)
  PublisheMessageSend: string;


  constructor () {
    if(!this.id) {
      this.id = uuid();
    }
  }
}