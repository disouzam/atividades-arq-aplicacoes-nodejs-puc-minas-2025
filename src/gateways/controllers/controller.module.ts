import { Module } from '@nestjs/common';
import { ProjectsController } from './projects/projects.controller';
import { TasksController } from './tasks/tasks.controller';
import { UsersController } from './users/users.controller';
import { UseCasesModule } from 'src/domain/use-cases/use-cases.module';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [UseCasesModule],
  controllers: [ProjectsController, TasksController, UsersController, AuthController],
})
export class ControllerModule {}
