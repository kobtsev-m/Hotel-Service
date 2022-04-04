import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Hotel } from './Hotel';

@Entity('services')
export class Service extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'boolean' })
  isAdditional: boolean;

  @Column({ type: 'int' })
  totalPrice: number;

  @ManyToMany(() => Hotel, (hotel) => hotel.services)
  @JoinTable({
    name: 'services_hotels',
    joinColumn: {
      name: 'serviceId',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'hotelId',
      referencedColumnName: 'id'
    }
  })
  hotels: Hotel[];
}
