import { Module } from '@nestjs/common';
import { TasksController } from './controllers/tasks.controller';
import { DomainModule } from '../domain/domain.module';

@Module({
  imports: [DomainModule],
  controllers: [TasksController],
})
export class GatewaysModule {}
