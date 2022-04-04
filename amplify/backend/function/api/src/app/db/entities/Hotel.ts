import { BaseEntity, Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Apartment } from './Apartment';
import { Service } from './Sevice';

@Entity('hotels')
export class Hotel extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'smallint' })
  stars: number;

  @Column({ type: 'smallint' })
  floorsTotal: number;

  @OneToMany(() => Apartment, (apartment) => apartment.hotel)
  apartments: Apartment[];

  @ManyToMany(() => Service, (service) => service.hotels)
  services: Service[];
}
