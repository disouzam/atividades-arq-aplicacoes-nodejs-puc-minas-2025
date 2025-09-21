import { IProject } from '@project-manager-api/domain/interfaces/project.interface';
import { ITask } from '@tasks-api/domain/task.interface';
import { IUser } from '@project-manager-api/domain/interfaces/user.interface';

export class Task implements ITask {
  id: number;
  name: string;
  status: 'pending' | 'completed';
  project: IProject;
  user: IUser;
}
