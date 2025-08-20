import { Module } from '@nestjs/common';
import { GetAllTasksService } from './get-all-tasks.service';
import { GetTaskByIdService } from './get-task-by-id.service';

@Module({
  providers: [GetAllTasksService, GetTaskByIdService]
})
export class TasksModule {}
