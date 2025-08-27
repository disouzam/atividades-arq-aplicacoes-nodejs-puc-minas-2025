import { Test, TestingModule } from '@nestjs/testing';
import { GetAllProjectsService } from './get-all-projects.service';

describe('GetAllProjectsService', () => {
  let service: GetAllProjectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAllProjectsService],
    }).compile();

    service = module.get<GetAllProjectsService>(GetAllProjectsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
