import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class UserService {
  private users = []
  private id = 0;
}