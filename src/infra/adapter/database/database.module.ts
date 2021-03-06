import { Module } from '@nestjs/common';
import { RepositoryModule } from './repository/repository.module';
@Module({
  imports: [RepositoryModule],
  providers: [RepositoryModule],
  exports: [RepositoryModule],
})
export class DatabaseModule {}
