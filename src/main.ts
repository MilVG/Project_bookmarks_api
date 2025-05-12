import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: 'chrome-extension://nhabnlmhbihebccklgpodopeocajdboa',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    },
  });
  app.useGlobalPipes(new ValidationPipe()); // habilita validación automática
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
