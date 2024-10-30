import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';

@Entity({ name: 'user' })
@Unique(['username', 'email'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uid: string

  @Column({ type: 'varchar', length: 191, comment: '유저 name' })
  username: string;

  @Column({ type: 'varchar', length: 191, comment: '유저 email' })
  email: string;

  @Column({ type: 'varchar', length: 191, comment: '유저 password' })
  password: string;

  @Column({ type: 'int', comment: '유저 level' })
  level: number;

  @Column({ type: 'varchar', length: 191, comment: '유저 profile image' })
  profileImage: string;

  @CreateDateColumn({ name: 'create_at', comment: '생성일' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'update_at', comment: '수정일' })
  updatedAt: Date;
}