import { IUser } from '@project-manager-api/domain/interfaces/user.interface';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ProjectEntity } from '@project-manager-api/infrastructure/database/entities/project.entity';
import { TaskEntity } from '@tasks-api/infrastructure/entities/task.entity';
import { IProject } from '@project-manager-api/domain/interfaces/project.interface';
import { ITask } from '@tasks-api/domain/task.interface';

@Entity('user')
export class UserEntity implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'firstName', nullable: false })
  firstName: string;

  @Column({ name: 'lastName', nullable: false })
  lastName: string;

  @Column({ name: 'email', nullable: false })
  email: string;

  @Column({ name: 'password', nullable: false })
  password: string;

  @OneToMany(() => ProjectEntity, (project) => project.user)
  projects: IProject[];

  @OneToMany(() => TaskEntity, (task) => task.user)
  tasks: ITask[];
}
