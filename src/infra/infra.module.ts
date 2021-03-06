import { Module } from '@nestjs/common';

import { AdapterModule } from './adapter/adapter.module';
import { ConnectorsModule } from './connectors/connectors.module';

@Module({
  imports: [AdapterModule, ConnectorsModule],
  exports: [AdapterModule],
})
export class InfraModule {}
