/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { IProject } from '@project-manager-api/domain/interfaces/project.interface';
import { ITask } from '@tasks-api/domain/task.interface';
import type { IUser } from '@project-manager-api/domain/interfaces/user.interface';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TaskEntity } from '@tasks-api/infrastructure/entities/task.entity';
import { UserEntity } from '@project-manager-api/infrastructure/database/entities/user.entity';

@Entity('project')
export class ProjectEntity implements IProject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'description', nullable: true })
  description: string;

  @OneToMany(() => TaskEntity, (task) => task.project)
  tasks: ITask[];

  @ManyToOne(() => UserEntity, (user) => user.projects)
  @JoinColumn()
  user: IUser;
}
