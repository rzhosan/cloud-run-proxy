import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle(
      `Version: ${process.env.VERSION || 'unspecified'} - Cloud Run Typescript API Proxy Example`,
    )
    .setDescription(
      'Allows to test Networking setup for the typescript API service deployed on Cloud Run',
    )
    .setVersion(process.env.VERSION || 'unspecified')
    .addTag('proxy')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  await app.listen(8080);
}

bootstrap();
