import { Module } from '@nestjs/common';
import { GetAllProjectsService } from './get-all-projects.service';
import { CreateProjectService } from './create-project.service';
import { GetProjectByIdService } from './get-project-by-id.service';
import { DatabaseModule } from '@project-manager-api/infrastructure/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    GetAllProjectsService,
    GetProjectByIdService,
    CreateProjectService,
  ],
  exports: [GetAllProjectsService, GetProjectByIdService, CreateProjectService],
})
export class ProjectsModule {}
