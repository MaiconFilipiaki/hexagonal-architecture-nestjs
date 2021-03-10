import { Module } from '@nestjs/common';
import { InfraModule } from 'src/infra/infra.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [InfraModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
