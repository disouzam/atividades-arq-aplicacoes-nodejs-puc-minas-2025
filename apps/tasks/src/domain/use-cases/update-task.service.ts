import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '../base-use-case';
import { UsersRepositoryService } from '@project-manager-api/infrastructure/database/repositories/users.repository.service';
import { TasksRepositoryService } from '@project-manager-api/infrastructure/database/repositories/tasks.repository.service';
import { UpdateTaskDto } from '@project-manager-api/gateways/controllers/tasks/dtos/update-task.dto';
import { ITask } from '@project-manager-api/domain/interfaces/task.interface';

@Injectable()
export class UpdateTaskService implements BaseUseCase {
  constructor(
    private readonly usersRepository: UsersRepositoryService,
    private readonly tasksRepository: TasksRepositoryService,
  ) {}

  async execute(payload: {
    task: UpdateTaskDto;
    userId: number;
  }): Promise<ITask> {
    // fetch user data
    const userData = await this.usersRepository.findById(payload.userId);

    if (!userData) {
      throw new Error('Usuário não encontrado');
    }

    await this.tasksRepository.updateById(payload.task);
    const task = await this.tasksRepository.findById(payload.task.id);

    if (!task) {
      throw new Error('Tarefa não encontrada');
    }

    return task;
  }
}
