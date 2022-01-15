import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid} from 'uuid';
import { Client } from "./Client";


@Entity("subscribers")
export class Subscriber {

  @PrimaryColumn()
  readonly id : string;

  @Column()
  subscriber : string;


  @Column()
  topic: string;

  @Column()
  oos: number;


  @Column()
  color: string;

  @CreateDateColumn()
  created_at: Date;

  @JoinColumn({name: "id_client" })
  @ManyToOne ( ()=> Client)
  clientSubscriber : string;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }

}