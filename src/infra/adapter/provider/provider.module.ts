import { Module } from '@nestjs/common';
import PurchaseUser from './contract/receveid/purchaseUser.receveid';
import { ProductProvider } from './product-provider';

@Module({
  providers: [ProductProvider],
  exports: [ProductProvider],
})
export class ProviderModule {}
