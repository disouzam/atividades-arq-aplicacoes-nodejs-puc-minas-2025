import { Module } from '@nestjs/common';
import { ControllerModule } from './controllers/controller.module';
import { AuthGuardService } from './guards/auth-guard.service';

@Module({
  imports: [ControllerModule],
  providers: [AuthGuardService],
  exports: [AuthGuardService],
})
export class GatewaysModule {}
