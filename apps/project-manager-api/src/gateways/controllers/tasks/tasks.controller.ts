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
      console.log('Disparando mensagem para Tasks');

      return await this.redisClient
        .send({ cmd: 'get_tasks' }, { userId: loggedUser.sub })
        .toPromise();
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Get(':id')
  async findOne(@Req() request, @Param('id') id: number) {
    try {
      const loggedUser = request.user;

      return await this.redisClient
        .send({ cmd: 'get_task_by_id' }, { userId: loggedUser.sub, taskId: id })
        .toPromise();
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Post()
  async create(@Req() request, @Body() createTaskDto: CreateTaskDto) {
    try {
      const loggedUser = request.user;

      return await this.redisClient
        .send(
          { cmd: 'create_task' },
          { userId: loggedUser.sub, task: createTaskDto },
        )
        .toPromise();
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }
}
