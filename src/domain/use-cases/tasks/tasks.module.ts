import { Module } from '@nestjs/common';
import { GetAllTasksService } from './get-all-tasks.service';
import { GetTaskByIdService } from './get-task-by-id.service';
import { CreateTaskService } from './create-task.service';

@Module({
  providers: [GetAllTasksService, GetTaskByIdService, CreateTaskService]
})
export class TasksModule {}
