import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConsoleLogger } from '@nestjs/common';
import { TimingInterceptor } from './interceptors/timing.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger({
      json: false,
      prefix: 'ProjectManager',
      logLevels: ['error', 'warn', 'log', 'fatal', 'verbose', 'debug'],
    }),
  });
  app.useGlobalInterceptors(new TimingInterceptor());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
