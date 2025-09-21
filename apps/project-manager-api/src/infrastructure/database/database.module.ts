import { Module } from '@nestjs/common';
import { ProjectsRepositoryService } from './repositories/projects.repository.service';
import { UsersRepositoryService } from './repositories/users.repository.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@project-manager-api/infrastructure/database/entities/user.entity';
import { ProjectEntity } from '@project-manager-api/infrastructure/database/entities/project.entity';
import { TaskEntity } from '@tasks-api/infrastructure/entities/task.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, ProjectEntity, TaskEntity]),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql.sqlite',
      entities: [__dirname + '/dist/../**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  providers: [ProjectsRepositoryService, UsersRepositoryService],
  exports: [ProjectsRepositoryService, UsersRepositoryService],
})
export class DatabaseModule {}
