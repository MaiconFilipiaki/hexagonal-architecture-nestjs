import { Module } from '@nestjs/common';
import { ConnectorsModule } from '../connectors/connectors.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ConnectorsModule, DatabaseModule],
  providers: [],
  exports: [DatabaseModule],
})
export class AdapterModule {}
