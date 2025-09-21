/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { BaseUseCase } from './base-use-case';
import { UsersRepositoryService } from '@project-manager-api/infrastructure/database/repositories/users.repository.service';
import { TasksRepositoryService } from '../../infrastructure/repositories/tasks.repository.service';
import { ITask } from '@tasks-api/domain/task.interface';

@Injectable()
export class GetAllTasksService implements BaseUseCase {
  constructor(
    private readonly usersRepository: UsersRepositoryService,
    private readonly tasksRepository: TasksRepositoryService,
  ) {}

  async execute(payload: { userId: number }): Promise<ITask[]> {
    // fetch user data
    const userData = await this.usersRepository.findById(payload.userId);

    if (!userData) {
      throw new Error('Usuário não encontrado');
    }

    const tasks = await this.tasksRepository.findAll(payload.userId);

    if (!tasks) {
      throw new Error('Erro ao listar tarefas');
    }

    return tasks;
  }
}
