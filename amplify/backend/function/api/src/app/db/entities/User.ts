import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Organisation } from './Organisation';
import { Rent } from './Rent';
import { Debt } from './Debt';
import { Complaint } from './Complaint';
import { UserRole } from '../constants';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  cognitoId: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  firstName: string;

  @Column({ type: 'varchar', length: 255 })
  lastName: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.CLIENT
  })
  role: UserRole;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Organisation, (organisation) => organisation.users)
  @JoinColumn({ name: 'organisationId' })
  organisation: Organisation;

  @OneToMany(() => Rent, (rent) => rent.user)
  rents: Rent[];

  @OneToOne(() => Debt)
  debt: Debt;

  @OneToMany(() => Complaint, (complaint) => complaint.user)
  complaints: Complaint[];
}
