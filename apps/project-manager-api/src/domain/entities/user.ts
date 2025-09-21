import { IProject } from '../interfaces/project.interface';
import { ITask } from '@tasks-api/domain/task.interface';
import { IUser } from '../interfaces/user.interface';

export class User implements IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  projects: IProject[];
  tasks: ITask[];
}
