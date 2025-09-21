import { Injectable } from '@nestjs/common';
import { Task } from '@project-manager-api/domain/entities/task';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { TaskEntity } from '@tasks-api/infrastructure/entities/task.entity';
import { ITasksRepository } from '@project-manager-api/domain/repositories/tasks-repository.interface';
import { ITask } from '@tasks-api/domain/task.interface';

@Injectable()
export class TasksRepositoryService
  extends Repository<TaskEntity>
  implements ITasksRepository
{
  constructor(dataSource: DataSource) {
    super(TaskEntity, dataSource.createEntityManager());
  }

  findAll(userId: number): Promise<Task[]> {
    return this.findBy({ user: { id: userId } });
  }

  findById(id: number): Promise<ITask | null> {
    return this.findOneBy({ id });
  }

  add(payload: DeepPartial<ITask>): Promise<ITask> {
    return this.save(payload) as Promise<ITask>;
  }

  updateById(payload: DeepPartial<ITask>): Promise<ITask> {
    return this.save(payload) as Promise<ITask>;
  }
}
