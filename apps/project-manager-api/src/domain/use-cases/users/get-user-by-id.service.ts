import { Injectable } from '@nestjs/common';
import { IUser } from '@project-manager-api/domain/interfaces/user.interface';
import { UsersRepositoryService } from '@project-manager-api/infrastructure/database/repositories/users.repository.service';

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
