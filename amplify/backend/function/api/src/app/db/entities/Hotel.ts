import { BaseEntity, Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Apartment } from './Apartment';
import { Service } from './Sevice';

@Entity('hotels')
export class Hotel extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'smallint' })
  stars: number;

  @Column({ type: 'smallint' })
  floorsTotal: number;

  @Column({ type: 'smallint', array: true })
  roomsForFloor: number[];

  @OneToMany(() => Apartment, (apartment) => apartment.hotel)
  apartments: Apartment[];

  @ManyToMany(() => Service)
  services: Service[];
}
