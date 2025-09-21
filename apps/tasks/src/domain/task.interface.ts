import { IProject } from '@project-manager-api/domain/interfaces/project.interface';
import { IUser } from '@project-manager-api/domain/interfaces/user.interface';

export interface ITask {
  id: number;
  name: string;
  status: 'pending' | 'completed';
  project: IProject;
  user: IUser;
}
