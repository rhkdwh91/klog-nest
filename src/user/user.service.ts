import { Injectable } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { SaveOptions, RemoveOptions } from 'typeorm';

const users: User[] = [
  {
    uid: 1, username: '유저1',
    email: '',
    password: '',
    level: 0,
    profileImage: '',
    createdAt: undefined,
    updatedAt: undefined,
    hasId: function(): boolean {
      throw new Error('Function not implemented.');
    },
    save: function(options?: SaveOptions): Promise<User> {
      throw new Error('Function not implemented.');
    },
    remove: function(options?: RemoveOptions): Promise<User> {
      throw new Error('Function not implemented.');
    },
    softRemove: function(options?: SaveOptions): Promise<User> {
      throw new Error('Function not implemented.');
    },
    recover: function(options?: SaveOptions): Promise<User> {
      throw new Error('Function not implemented.');
    },
    reload: function(): Promise<void> {
      throw new Error('Function not implemented.');
    },
  },
  {
    uid: 2, username: '유저2',
    email: '',
    password: '',
    level: 0,
    profileImage: '',
    createdAt: undefined,
    updatedAt: undefined,
    hasId: function(): boolean {
      throw new Error('Function not implemented.');
    },
    save: function(options?: SaveOptions): Promise<User> {
      throw new Error('Function not implemented.');
    },
    remove: function(options?: RemoveOptions): Promise<User> {
      throw new Error('Function not implemented.');
    },
    softRemove: function(options?: SaveOptions): Promise<User> {
      throw new Error('Function not implemented.');
    },
    recover: function(options?: SaveOptions): Promise<User> {
      throw new Error('Function not implemented.');
    },
    reload: function(): Promise<void> {
      throw new Error('Function not implemented.');
    },
  },
  {
    uid: 3, username: '유저3',
    email: '',
    password: '',
    level: 0,
    profileImage: '',
    createdAt: undefined,
    updatedAt: undefined,
    hasId: function(): boolean {
      throw new Error('Function not implemented.');
    },
    save: function(options?: SaveOptions): Promise<User> {
      throw new Error('Function not implemented.');
    },
    remove: function(options?: RemoveOptions): Promise<User> {
      throw new Error('Function not implemented.');
    },
    softRemove: function(options?: SaveOptions): Promise<User> {
      throw new Error('Function not implemented.');
    },
    recover: function(options?: SaveOptions): Promise<User> {
      throw new Error('Function not implemented.');
    },
    reload: function(): Promise<void> {
      throw new Error('Function not implemented.');
    },
  },
];

@Injectable()
export class UserService {
  /**
   * @author Ryan
   * @description 유저 생성
   *
   * @param uid 유저 고유 아이디
   * @param username 유저 이름
   * @returns {User[]} users
   */
  onCreateUser(uid: number, username: string): User[] {
    // @ts-ignore
    return users.concat({ uid, username });
  }

  /**
   * @author Ryan
   * @description 모든 유저 조회
   *
   * @returns {User[]} users
   */
  getUserAll(): User[] {
    return users;
  }

  /**
   * @author Ryan
   * @description 단일 유저 조회
   *
   * @param uid 유저 고유 아이디
   * @returns {User} users
   */
  findByUserOne(uid: number): User {
    return users.find((data) => data.uid == uid);
  }

  /**
   * @author Ryan
   * @description 단일 유저 수정
   *
   * @returns {User} users
   */
  setUser(uid: number, username: string): User {
    return users.find((data) => {
      if (data.uid == uid) return (data.username = username);
    });
  }

  /**
   * @author Ryan
   * @description 전체 유저 수정
   *
   * @returns {User[]} users
   */
  setAllUser(uid: number, username: string): { username: any; uid: any }[] {
    return users.map((data) => {
      if (data.uid == uid) {
        data.username = username;
      }

      return {
        uid: data.uid,
        username: data.username,
      };
    });
  }

  /**
   * @author Ryan
   * @description 유저 삭제
   *
   * @param uid
   * @returns {User[]} users
   */
  deleteUser(uid: number): User[] {
    return users.filter((data) => data.uid !== uid);
  }

  getHelloWorld(): string {
    return 'Hello World!!';
  }
}
