import { Test, TestingModule } from '@nestjs/testing';
import { GetProjectByIdService } from './get-project-by-id.service';

describe('GetProjectByIdService', () => {
  let service: GetProjectByIdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetProjectByIdService],
    }).compile();

    service = module.get<GetProjectByIdService>(GetProjectByIdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
