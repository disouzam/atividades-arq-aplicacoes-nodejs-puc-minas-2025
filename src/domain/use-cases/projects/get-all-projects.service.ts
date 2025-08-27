import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '../base-use-case';
import { ProjectsRepositoryService } from 'src/infrastructure/database/repositories/projects.repository.service';
import { UsersRepositoryService } from 'src/infrastructure/database/repositories/users.repository.service';
import { IProject } from 'src/domain/interfaces/project.interface';

@Injectable()
export class GetAllProjectsService implements BaseUseCase {
  constructor(
    private readonly usersRepository: UsersRepositoryService,
    private readonly projectsRepository: ProjectsRepositoryService,
  ) {}

  async execute(userId: number): Promise<IProject[]> {
    // fetch user data
    const userData = await this.usersRepository.findById(userId);
    if (!userData) {
      throw new Error('Usuário não encontrado');
    }

    const projects = await this.projectsRepository.findAll(userId);

    if (!projects) {
      throw new Error('Erro ao recuperar projetos');
    }

    return projects;
  }
}
