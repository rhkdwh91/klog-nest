import {
  BaseEntity,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne, JoinColumn,
} from 'typeorm';
import { Post } from '../post/post.entity';

@Entity({ name: 'postView' })
export class PostView extends BaseEntity {
  @Column({ type: 'int',  comment: 'count', default: 0 })
  count: number;

  @ManyToOne(() => Post, post => post)
  @JoinColumn({ name: 'postUid' })
  post: Post;

  @CreateDateColumn({ name: 'create_at', comment: '생성일' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'update_at', comment: '수정일' })
  updatedAt: Date;
}