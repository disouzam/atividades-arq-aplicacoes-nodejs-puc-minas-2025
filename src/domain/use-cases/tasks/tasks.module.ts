import { Module } from '@nestjs/common';
import { GetAllTasksService } from './get-all-tasks.service';

@Module({
  providers: [GetAllTasksService]
})
export class TasksModule {}
