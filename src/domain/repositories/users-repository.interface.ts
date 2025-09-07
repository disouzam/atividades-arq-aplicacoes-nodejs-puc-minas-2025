import { DeepPartial } from 'typeorm';
import { IUser } from '../interfaces/user.interface';

export interface IUsersRepository {
  findAll(): Promise<IUser[]>;
  findById(id: number): Promise<IUser | null>;
  add(payload: DeepPartial<IUser>): Promise<IUser>;
}
