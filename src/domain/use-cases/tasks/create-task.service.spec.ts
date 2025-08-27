import { Test, TestingModule } from '@nestjs/testing';
import { CreateTaskService } from './create-task.service';

describe('CreateTaskService', () => {
  let service: CreateTaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateTaskService],
    }).compile();

    service = module.get<CreateTaskService>(CreateTaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
