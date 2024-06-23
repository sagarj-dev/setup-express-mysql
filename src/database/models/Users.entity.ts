import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
