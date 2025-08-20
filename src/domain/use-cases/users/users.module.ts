import { Module } from '@nestjs/common';
import { CreateUserService } from './create-user.service';

@Module({
  providers: [CreateUserService]
})
export class UsersModule {}
