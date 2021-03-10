import { Injectable } from '@nestjs/common';
import UserEntity from 'src/infra/adapter/database/entity/User.entity';
import { UserRepo } from 'src/infra/adapter/database/repository/User.repository';
import { ProductProvider } from 'src/infra/adapter/provider/product-provider';
import { BusinessException } from 'src/infra/exceptions/business.exception';
import UserMapper from './infrastructure/mapper/user.mapper';
import PurchaseUserResponse from './infrastructure/response/purchaseUser.response';
import UserResponse from './infrastructure/response/user.response';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepo,
    private readonly productProvider: ProductProvider,
  ) {}

  async createUser(userEntity: UserEntity): Promise<UserResponse> {
    if (!userEntity.email) {
      new BusinessException(BusinessException.EMAIL_NOT_INFORMATION);
    }
    const userByEmail = await this.userRepository.findByEmail(userEntity.email);
    console.log(userByEmail);
    if (userByEmail) {
      throw new BusinessException(BusinessException.EMAIL_ALREADY_EXISTS);
    }
    const userSave = await this.userRepository.save(userEntity);
    return UserMapper.entityToResponse(userSave);
  }

  async purchaseUser(email: string): Promise<PurchaseUserResponse> {
    const response = await this.productProvider.findUserAndBuyProduct(email);
    return UserMapper.contractToResponse(response);
  }
}
