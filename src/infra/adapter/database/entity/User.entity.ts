import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export default class UserEntity {
  constructor(
    id: string = null,
    username: string = null,
    email: string = null,
    name: string = null,
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.name = name;
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  username: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  name: string;
}
