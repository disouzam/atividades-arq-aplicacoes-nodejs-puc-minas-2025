import { Module } from '@nestjs/common';
import { CreateUserService } from './create-user.service';
import { GetUserByIdService } from './get-user-by-id.service';

@Module({
  providers: [CreateUserService, GetUserByIdService]
})
export class UsersModule {}
