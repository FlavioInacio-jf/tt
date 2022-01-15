import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("clients")
class Client {

  @PrimaryColumn()
  readonly id : string;

  @Column()
  client : string;

  @Column()
  protocol : string;

  @Column()
  host : string;

  @Column()
  password: string;

  @Column()
  icon : number;

  @Column({default: false})
  isWorking : boolean;


  @CreateDateColumn()
  created_at : Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

}

export { Client };
