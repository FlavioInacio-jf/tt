import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid} from 'uuid';
import { Client } from "./Client";


@Entity("publishers")
export class Publisher {

  @PrimaryColumn()
  readonly id : string;

  @Column()
  publish : string;

  @Column()
  topic: string;

  @Column()
  oos: number;

  @Column()
  color: string;

  @CreateDateColumn()
  created_at: Date;

  @JoinColumn({name: "id_client" })
  @ManyToOne ( ()=> Client, {cascade: true})
  clientPublisher : string;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }

}