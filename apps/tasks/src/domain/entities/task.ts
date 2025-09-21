import { IProject } from '../interfaces/project.interface';
import { ITask } from '@tasks-api/domain/task.interface';
import { IUser } from '../interfaces/user.interface';

export class Task implements ITask {
  id: number;
  name: string;
  status: 'pending' | 'completed';
  project: IProject;
  user: IUser;
}
