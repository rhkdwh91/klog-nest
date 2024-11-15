import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity({ name: 'writerApplicationUsers' })
export class WriterApplicationUsers extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  uid: number

  @ManyToOne(() => User, user => user.posts)
  @JoinColumn({ name: 'userUid' })
  user: User;

  @CreateDateColumn({ name: 'create_at', comment: '생성일' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'update_at', comment: '수정일' })
  updatedAt: Date;
}