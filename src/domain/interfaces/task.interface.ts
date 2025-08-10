import { IProject } from './project.interface';
import { IUser } from './user.interface';

export class ITask {
  id: number;
  name: string;
  status: 'pending' | 'completed';
  project: IProject;
  user: IUser;
}
