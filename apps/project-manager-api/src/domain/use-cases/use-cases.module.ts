import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ProjectsModule, UsersModule],
  exports: [ProjectsModule, UsersModule],
})
export class UseCasesModule {}
