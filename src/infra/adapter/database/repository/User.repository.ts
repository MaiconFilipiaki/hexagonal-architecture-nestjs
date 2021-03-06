import UserEntity from '../entity/User.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(UserEntity)
export class UserRepo extends Repository<UserEntity> {}
