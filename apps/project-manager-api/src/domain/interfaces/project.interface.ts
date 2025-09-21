import { ITask } from './task.interface';
import { IUser } from './user.interface';

export interface IProject {
  id: number;
  name: string;
  description: string;
  tasks: ITask[];
  user: IUser;
}
