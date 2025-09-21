/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Body,
  Controller,
  Get,
  Inject,
  NotFoundException,
  Param,
  Post,
  Req,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { ClientProxy } from '@nestjs/microservices';

@Controller('tasks')
export class TasksController {
  constructor(
    @Inject('PROJECT_MANAGER_API') private readonly redisClient: ClientProxy,
  ) {}

  @Get()
  async findAll(@Req() request) {
    try {
      const loggedUser = request.user;
      console.log(
        '\nDisparando mensagem para Tasks para obter todas as tasks cadastradas...',
      );

      const result = await this.redisClient
        .send({ cmd: 'get_tasks' }, { userId: loggedUser.sub })
        .toPromise();

      console.log('Tasks encontradas:', result);

      return result;
    } catch (error) {
      console.error(
        `\nErro na obtenção das tarefas devido ao erro:`,
        error.message,
      );
      throw new NotFoundException(error.message);
    }
  }

  @Get(':id')
  async findOne(@Req() request, @Param('id') id: number) {
    try {
      const loggedUser = request.user;

      console.log(
        `\nDisparando mensagem para Tasks para obter a task cujo id é ${id}...`,
      );

      const result = await this.redisClient
        .send({ cmd: 'get_task_by_id' }, { userId: loggedUser.sub, taskId: id })
        .toPromise();

      console.log('Task encontrada:', result);

      return result;
    } catch (error) {
      console.error(
        `\nErro na obtenção da tarefa id ${id} devido ao erro:`,
        error.message,
      );
      throw new NotFoundException(error.message);
    }
  }

  @Post()
  async create(@Req() request, @Body() createTaskDto: CreateTaskDto) {
    try {
      const loggedUser = request.user;

      console.log(
        `\nDisparando mensagem para Tasks para criar uma nova task cujo nome é ${createTaskDto.name}...`,
      );

      const result = await this.redisClient
        .send(
          { cmd: 'create_task' },
          { userId: loggedUser.sub, task: createTaskDto },
        )
        .toPromise();

      console.log('Task criada:', result);

      return result;
    } catch (error) {
      console.error(
        `\nErro na criação da tarefa cuja descrição é ${JSON.stringify(createTaskDto)}  devido ao erro: ${error.message}`,
      );
      throw new UnprocessableEntityException(error.message);
    }
  }
}
