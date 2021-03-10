import { HttpModule, Module } from '@nestjs/common';
import { ConnectorsModule } from 'src/infra/connectors/connectors.module';
import { ProductApi } from './product-api';

@Module({
  imports: [ConnectorsModule],
  providers: [ProductApi],
  exports: [ProductApi],
})
export class ProductApiModule {}
