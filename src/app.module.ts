import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerModule } from './gateways/controllers/controller.module';

@Module({
  imports: [ControllerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
