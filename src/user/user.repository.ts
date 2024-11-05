import { NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  // 유저 생성
  async onCreate(createUserDto: CreateUserDto): Promise<boolean> {
    const { username, password  } = createUserDto;
    const user = await this.save({ username, password });
    return !!user
  }

  // 모든 유저 조회
  async findAll(): Promise<User[]> {
    return await this.find()
  }

  // 단일 유저 조회
  async findById(uid: number): Promise<User> {
    const user = await this.findOne({ where: { uid } });

    if (!user) {
      throw new NotFoundException('유저를 찾을 수 없습니다.');
    }

    return user
  }
}