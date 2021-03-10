import UserEntity from '../entity/User.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(UserEntity)
export class UserRepo extends Repository<UserEntity> {
  async findByEmail(email: string): Promise<UserEntity> {
    return this.findOne({
      where: { email: email },
    });
  }
}
