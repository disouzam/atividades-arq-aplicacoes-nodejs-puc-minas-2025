import { DeepPartial } from 'typeorm';
import { ITask } from '../interfaces/task.interface';

export interface ITasksRepository {
  findAll(userId: string): Promise<ITask[]>;
  findById(id: string): Promise<ITask>;
  add(payload: DeepPartial<ITask>): Promise<ITask>;
  updateById(payload: DeepPartial<ITask>): Promise<ITask>;
}
