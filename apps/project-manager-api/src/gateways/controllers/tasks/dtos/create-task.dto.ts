import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty({ message: 'O nome da tarefa precisa de ser definido' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'O status da tarefa precisa ser definido' })
  @IsString()
  status: 'pending' | 'completed';

  projectId: number;
}
