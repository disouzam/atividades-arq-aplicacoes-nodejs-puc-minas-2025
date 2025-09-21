import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { TasksModule } from './tasks.module';

async function bootstrap() {
  const app = await NestFactory.create(TasksModule);
  app.connectMicroservice(
    {
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6379,
      },
    },
    {
      inheritAppConfig: true,
    },
  );

  await app.startAllMicroservices();
}

bootstrap();
