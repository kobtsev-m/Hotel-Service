import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity('debts')
export class Debt extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int' })
  totalPrice: number;

  @OneToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;
}
