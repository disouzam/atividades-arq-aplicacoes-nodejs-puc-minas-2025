import { Module } from '@nestjs/common';
import { GetAllTasksService } from './get-all-tasks.service';
import { GetTaskByIdService } from './get-task-by-id.service';
import { CreateTaskService } from './create-task.service';
import { UpdateTaskService } from './update-task.service';

@Module({
  providers: [GetAllTasksService, GetTaskByIdService, CreateTaskService, UpdateTaskService]
})
export class TasksModule {}
