import { Module } from '@nestjs/common';
import { ConnectorsModule } from '../connectors/connectors.module';
import { DatabaseModule } from './database/database.module';
import { ProviderModule } from './provider/provider.module';
import { ProductApiModule } from './product-api/product-api.module';

@Module({
  imports: [ConnectorsModule, DatabaseModule, ProviderModule, ProductApiModule],
  providers: [],
  exports: [DatabaseModule, ProviderModule, ProductApiModule],
})
export class AdapterModule {}
