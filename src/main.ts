import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(process.env.npm_package_context);
  const options = new DocumentBuilder()
    .setTitle('Api of example')
    .setDescription('The api created as example')
    .setVersion(process.env.npm_package_version)
    .build();
  const document = SwaggerModule.createDocument(app, options);
  const optionsSwagger =
    process.env.NODE_ENV === 'development'
      ? {}
      : {
          swaggerOptions: {
            supportedSubmitMethods: [],
          },
        };
  SwaggerModule.setup(
    process.env.npm_package_context,
    app,
    document,
    optionsSwagger,
  );

  app.setGlobalPrefix(process.env.npm_package_context);
  await app.listen(3000);
}
bootstrap();
