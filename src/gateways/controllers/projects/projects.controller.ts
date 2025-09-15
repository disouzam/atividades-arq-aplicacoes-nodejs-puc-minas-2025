/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Body,
  Controller,
  Get,
  Inject,
  NotFoundException,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { CreateProjectService } from 'src/domain/use-cases/projects/create-project.service';
import { GetAllProjectsService } from 'src/domain/use-cases/projects/get-all-projects.service';
import { GetProjectByIdService } from 'src/domain/use-cases/projects/get-project-by-id.service';
import { CreateProjectDto } from './dtos/create-project.dto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import Cache from 'cache-manager';

@Controller('projects')
export class ProjectsController {
  constructor(
    private readonly getAllProjectsUseCase: GetAllProjectsService,
    private readonly getProjectByIdUseCase: GetProjectByIdService,
    private readonly createProjectUseCase: CreateProjectService,
    @Inject(CACHE_MANAGER) private cacheService: Cache,
  ) {}

  @Get()
  async findAll(@Req() request) {
    try {
      const loggedUser = request.user;

      const cachedData = await this.cacheService.get<{ name: string }>(
        `user:${loggedUser.sub}/all-projects`,
      );

      console.log('Cached Data:', cachedData);

      if (cachedData) {
        console.log('Returning cached data');
        return cachedData;
      }

      const data = await this.getAllProjectsUseCase.execute(loggedUser.sub);

      await this.cacheService.set(`user:${loggedUser.sub}/all-projects`, data);

      return data;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Get(':id')
  async findOne(@Req() request, @Param('id') id: number) {
    try {
      const loggedUser = request.user;
      return await this.getProjectByIdUseCase.execute({
        userId: loggedUser.sub,
        projectId: id,
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Post()
  async create(@Req() request, @Body() createProjectDto: CreateProjectDto) {
    try {
      const loggedUser = request.user;

      return await this.createProjectUseCase.execute({
        userId: loggedUser.sub,
        project: createProjectDto,
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
