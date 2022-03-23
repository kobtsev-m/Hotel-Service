import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PaymentStatus } from '../constants';
import { Apartment } from './Apartment';
import { User } from './User';

@Entity('rents')
export class Rent extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamptz' })
  processingTime: Date;

  @Column({ type: 'timestamptz' })
  expirationTime: Date;

  @Column({ type: 'int' })
  totalPrice: number;

  @Column({
    type: 'enum',
    enum: PaymentStatus,
    default: PaymentStatus.NOT_PAID
  })
  paymentStatus: PaymentStatus;

  @Column({ type: 'boolean' })
  isReservation: boolean;

  @ManyToOne(() => User, (user) => user.rents)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Apartment, (apartment) => apartment.rents)
  @JoinColumn({ name: 'apartmentId' })
  apartment: Apartment;
}
