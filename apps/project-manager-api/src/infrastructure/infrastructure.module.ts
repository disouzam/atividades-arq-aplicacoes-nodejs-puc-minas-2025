import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [DatabaseModule, AuthModule, RedisModule],
})
export class InfrastructureModule {}
