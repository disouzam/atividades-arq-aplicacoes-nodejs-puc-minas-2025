import { Test, TestingModule } from '@nestjs/testing';
import { CreateProjectService } from './create-project.service';

describe('CreateProjectService', () => {
  let service: CreateProjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateProjectService],
    }).compile();

    service = module.get<CreateProjectService>(CreateProjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
