import { Module } from '@nestjs/common';
import { CreateUserService } from './create-user.service';
import { GetUserByIdService } from './get-user-by-id.service';
import { DatabaseModule } from 'src/infrastructure/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [CreateUserService, GetUserByIdService],
  exports: [CreateUserService, GetUserByIdService],
})
export class UsersModule {}
