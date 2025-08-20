import { Module } from '@nestjs/common';
import { GetAllProjectsService } from './get-all-projects.service';

@Module({
  providers: [GetAllProjectsService]
})
export class ProjectsModule {}
