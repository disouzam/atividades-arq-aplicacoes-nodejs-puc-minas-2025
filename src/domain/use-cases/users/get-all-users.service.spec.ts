import { Test, TestingModule } from '@nestjs/testing';
import { GetAllUsersService } from './get-all-users.service';

describe('GetAllUsersService', () => {
  let service: GetAllUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAllUsersService],
    }).compile();

    service = module.get<GetAllUsersService>(GetAllUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
