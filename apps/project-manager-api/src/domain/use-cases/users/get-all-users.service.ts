import { Injectable } from '@nestjs/common';
import { IUser } from 'src/domain/interfaces/user.interface';
import { UsersRepositoryService } from 'src/infrastructure/database/repositories/users.repository.service';

@Injectable()
export class GetAllUsersService {
  constructor(private readonly usersRepository: UsersRepositoryService) {}

  async execute(): Promise<IUser[]> {
    const users = await this.usersRepository.findAll();

    return users;
  }
}
