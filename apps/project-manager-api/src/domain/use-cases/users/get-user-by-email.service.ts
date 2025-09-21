import { Injectable } from '@nestjs/common';
import { IUser } from '@project-manager-api/domain/interfaces/user.interface';
import { UsersRepositoryService } from '@project-manager-api/infrastructure/database/repositories/users.repository.service';

@Injectable()
export class GetUserByEmailService {
  constructor(private readonly usersRepository: UsersRepositoryService) {}

  async execute(email: string): Promise<IUser> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    return user;
  }
}
