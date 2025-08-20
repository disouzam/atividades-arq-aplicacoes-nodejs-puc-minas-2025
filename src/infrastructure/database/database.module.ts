import { Module } from '@nestjs/common';
import { ProjectsRepositoryService } from './repositories/projects.repository.service';
import { TasksRepositoryService } from './repositories/tasks.repository.service';
import { UsersRepositoryService } from './repositories/users.repository.service';

@Module({
  providers: [ProjectsRepositoryService, TasksRepositoryService, UsersRepositoryService]
})
export class DatabaseModule {}
