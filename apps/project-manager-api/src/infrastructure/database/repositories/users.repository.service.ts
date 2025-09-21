import { Injectable } from '@nestjs/common';
import { IUsersRepository } from '@project-manager-api/domain/repositories/users-repository.interface';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { UserEntity } from '@project-manager-api/infrastructure/database/entities/user.entity';
import { IUser } from '@project-manager-api/domain/interfaces/user.interface';

@Injectable()
export class UsersRepositoryService
  extends Repository<UserEntity>
  implements IUsersRepository
{
  constructor(dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }

  findAll(): Promise<IUser[]> {
    return this.find();
  }

  findById(id: number): Promise<IUser | null> {
    return this.findOneBy({ id });
  }

  findByEmail(email: string): Promise<IUser | null> {
    return this.findOneBy({ email });
  }

  add(payload: DeepPartial<IUser>): Promise<IUser> {
    return this.save(payload) as Promise<IUser>;
  }
}
