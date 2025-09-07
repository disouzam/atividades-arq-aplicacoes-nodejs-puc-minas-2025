import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConsoleLogger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger({
      json: false,
      prefix: 'MyApp',
      logLevels: ['error', 'warn', 'log', 'fatal', 'verbose', 'debug'],
    }),
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
