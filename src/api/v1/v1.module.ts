import { Module } from '@nestjs/common';
import { Routes } from 'nest-router';
import { InfraModule } from 'src/infra/infra.module';
import { UserModule } from './user/user.module';

export const routesv1: Routes = [
  {
    path: '/user',
    module: UserModule,
  },
];

@Module({
  imports: [UserModule],
  providers: [],
})
export class V1Module {}
