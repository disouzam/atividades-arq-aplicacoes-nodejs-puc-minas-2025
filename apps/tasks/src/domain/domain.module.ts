import { Module } from '@nestjs/common';
import { TasksModule } from './use-cases/tasks.module';

@Module({
  imports: [TasksModule],
  exports: [TasksModule],
})
export class DomainModule {}
