import {
  BaseEntity,
  Check,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Hotel } from './Hotel';
import { Rent } from './Rent';

@Entity('apartments')
@Check('"pricePerDay" > 0')
export class Apartment extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'smallint' })
  floor: number;

  @Column({ type: 'smallint' })
  roomsTotal: number;

  @Column({ type: 'int' })
  pricePerDay: number;

  @Column({ type: 'int' })
  availableCount: number;

  @ManyToOne(() => Hotel, (hotel) => hotel.apartments, { nullable: false })
  @JoinColumn({ name: 'hotelId' })
  hotel: Hotel;

  @OneToMany(() => Rent, (rent) => rent.apartment)
  rents: Rent[];
}
