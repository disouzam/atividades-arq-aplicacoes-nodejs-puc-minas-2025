import { IProject } from '../interfaces/project.interface';
import { ITask } from '@tasks-api/domain/task.interface';
import { IUser } from '../interfaces/user.interface';

export class Project implements IProject {
  id: number;
  name: string;
  description: string;
  tasks: ITask[];
  user: IUser;
}
