import { Module } from '@nestjs/common';
import { GetAllProjectsService } from './get-all-projects.service';
import { GetProjectByIdService } from './get-project-by-id.service';

@Module({
  providers: [GetAllProjectsService, GetProjectByIdService]
})
export class ProjectsModule {}
