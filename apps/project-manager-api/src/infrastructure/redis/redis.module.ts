import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      ttl: 10000,
    }),
  ],
})
export class RedisModule {}
