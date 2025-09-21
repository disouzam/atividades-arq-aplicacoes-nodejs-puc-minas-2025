import { Test, TestingModule } from '@nestjs/testing';
import { UpdateTaskService } from './update-task.service';

describe('UpdateTaskService', () => {
  let service: UpdateTaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateTaskService],
    }).compile();

    service = module.get<UpdateTaskService>(UpdateTaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
