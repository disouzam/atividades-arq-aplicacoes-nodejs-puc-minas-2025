import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { GatewaysModule } from './gateways/gateways.module';

@Module({
  imports: [InfrastructureModule, GatewaysModule],
  exports: [InfrastructureModule, GatewaysModule],
  providers: [InfrastructureModule, GatewaysModule],
})
export class TasksModule {}
