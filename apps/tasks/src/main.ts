import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { ConsoleLogger } from '@nestjs/common';
import { TasksModule } from './tasks.module';

async function bootstrap() {
  const app = await NestFactory.create(TasksModule, {
    logger: new ConsoleLogger({
      json: false,
      prefix: 'TaskMicroservice',
      logLevels: ['error', 'warn', 'log', 'fatal', 'verbose', 'debug'],
    }),
  });

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
