import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Priority } from '../constants';
import { User } from './User';

@Entity('organisations')
export class Organisation extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({
    type: 'enum',
    enum: Priority,
    default: Priority.LOW
  })
  priority: Priority;

  @OneToMany(() => User, (user) => user.organisation)
  users: User[];
}
