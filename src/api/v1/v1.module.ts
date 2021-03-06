import { Module } from '@nestjs/common';
import { InfraModule } from 'src/infra/infra.module';

@Module({
  imports: [InfraModule],
})
export class V1Module {}
