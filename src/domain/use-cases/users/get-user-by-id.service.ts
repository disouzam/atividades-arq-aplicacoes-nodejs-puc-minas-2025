import { Injectable } from '@nestjs/common';
import { IUser } from 'src/domain/interfaces/user.interface';
import { UsersRepositoryService } from 'src/infrastructure/database/repositories/users.repository.service';

@Injectable()
export class GetUserByIdService {
  constructor(private readonly usersRepository: UsersRepositoryService) {}

  async execute(userId: number): Promise<IUser> {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new Error('User não encontrado');
    }

    return user;
  }
}
