import { Module } from '@nestjs/common';
import { RouterModule, Routes } from 'nest-router';
import { UserModule } from './v1/user/user.module';
import { V1Module, routesv1 } from './v1/v1.module';

const routes: Routes = [
  {
    path: '/v1',
    module: V1Module,
    children: routesv1,
  },
];

@Module({
  imports: [RouterModule.forRoutes(routes), V1Module],
})
export class ApiModule {}
