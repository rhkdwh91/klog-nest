import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from '../category/category.entity'

@Entity({ name: 'tag' })
export class Tag extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  uid: number

  @Column({ type: 'varchar', length: 191, comment: 'title' })
  name: string;

  @Column({ type: 'text', length: 191, comment: 'content' })
  value: string;

  @ManyToOne(type => Category, category => category.tags)
  @JoinColumn({ name: 'categoryUid' })
  category: Category;

  @CreateDateColumn({ name: 'create_at', comment: '생성일' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'update_at', comment: '수정일' })
  updatedAt: Date;
}