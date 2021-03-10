import { HttpModule, Module } from '@nestjs/common';
import { ConnectorsModule } from 'src/infra/connectors/connectors.module';
import { DatabaseModule } from '../database/database.module';
import { ProductApi } from '../product-api/product-api';
import PurchaseUser from './contract/receveid/purchaseUser.receveid';
import { ProductProvider } from './product-provider';

@Module({
  imports: [DatabaseModule, ConnectorsModule],
  providers: [ProductProvider, ProductApi],
  exports: [ProductProvider],
})
export class ProviderModule {}
