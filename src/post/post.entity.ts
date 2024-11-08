import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne, JoinColumn,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity({ name: 'post' })
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  uid: number

  @Column({ type: 'varchar', length: 191, comment: 'title' })
  title: string;

  @Column({ type: 'text', length: 191, comment: 'content' })
  content: string;

  @ManyToOne(type => User, user => user.posts)
  @JoinColumn({ name: 'userUid' })
  user: User;

  @CreateDateColumn({ name: 'create_at', comment: '생성일' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'update_at', comment: '수정일' })
  updatedAt: Date;
}