import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity, OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Tag } from '../tag/tag.entity';

@Entity({ name: 'category' })
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  uid: number

  @Column({ type: 'varchar', length: 191, comment: '유저 name' })
  name: string;

  @Column({ type: 'varchar', length: 191, comment: '유저 email' })
  value: string;

  @CreateDateColumn({ name: 'create_at', comment: '생성일' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'update_at', comment: '수정일' })
  updatedAt: Date;

  @OneToMany(type => Tag, tag => tag.category)
  tags: Tag[]
}