/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Controller,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateTaskService } from '../../domain/use-cases/create-task.service';
import { GetAllTasksService } from '../../domain/use-cases/get-all-tasks.service';
import { GetTaskByIdService } from '../../domain/use-cases/get-task-by-id.service';
import { CreateTaskDto } from './dtos/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(
    private readonly getAllTasksUseCase: GetAllTasksService,
    private readonly getTaskByIdUseCase: GetTaskByIdService,
    private readonly createTaskUseCase: CreateTaskService,
  ) {}

  @MessagePattern({ cmd: 'get_tasks' })
  async findAll(@Payload() data: { userId: number }) {
    try {
      console.log(
        `Recebendo mensagem para Tasks para listar todas as tarefas para o usuários ${data.userId}...`,
      );

      const result = await this.getAllTasksUseCase.execute({
        userId: data.userId,
      });

      console.log(
        'Tarefas listadas com sucesso pelo microserviço de Tasks:',
        result,
      );

      return result;
    } catch (error) {
      console.error(
        `Erro ao listas tarefas no microserviço de Tasks: ${error.name}-${error.message}`,
      );
      throw new NotFoundException(error.message);
    }
  }

  @MessagePattern({ cmd: 'get_task_by_id' })
  async findOne(@Payload() data: { userId: number; taskId: number }) {
    try {
      console.log(
        `Buscando tarefa por ID=${data.taskId} no microserviço de Tasks...`,
      );

      const result = await this.getTaskByIdUseCase.execute({
        userId: data.userId,
        taskId: data.taskId,
      });

      console.log('Tarefa encontrada no microserviço de Tasks:', result);

      return result;
    } catch (error) {
      console.error(
        `Erro ao listas tarefa cujo ID é ${data.taskId} no microserviço de Tasks: ${error.name}-${error.message}`,
      );
      throw new NotFoundException(error.message);
    }
  }

  @MessagePattern({ cmd: 'create_task' })
  async create(@Payload() data: { task: CreateTaskDto; userId: number }) {
    try {
      console.log(
        `Criando tarefa no microserviço de Tasks: ${data.task.name}...`,
      );

      const result = await this.createTaskUseCase.execute({
        userId: data.userId,
        task: data.task,
      });

      console.log(
        'Tarefa criada com sucesso no microserviço de Tasks:',
        result,
      );

      return result;
    } catch (error) {
      console.error(
        `Erro ao criar nova tarefa no microserviço de Tasks: ${error.name}-${error.message}`,
      );
      throw new UnprocessableEntityException(error.message);
    }
  }
}
