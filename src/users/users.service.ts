import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class UsersService {
  private users = []
  private id = 0;
}