import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { InfraModule } from './infra/infra.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [InfraModule, ApiModule],
  controllers: [AppController],
})
export class AppModule {}
