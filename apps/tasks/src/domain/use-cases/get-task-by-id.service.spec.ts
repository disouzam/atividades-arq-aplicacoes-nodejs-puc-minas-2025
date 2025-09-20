import { Test, TestingModule } from '@nestjs/testing';
import { GetTaskByIdService } from './get-task-by-id.service';

describe('GetTaskByIdService', () => {
  let service: GetTaskByIdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetTaskByIdService],
    }).compile();

    service = module.get<GetTaskByIdService>(GetTaskByIdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
