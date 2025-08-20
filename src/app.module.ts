import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerModule } from './gateways/controllers/controller.module';
import { DomainModule } from './domain/domain.module';

@Module({
  imports: [ControllerModule, DomainModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
