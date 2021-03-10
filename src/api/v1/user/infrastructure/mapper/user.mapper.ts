import UserEntity from 'src/infra/adapter/database/entity/User.entity';
import PurchaseUser from 'src/infra/adapter/provider/contract/receveid/purchaseUser.receveid';
import UserRequest from '../request/user.request';
import PurchaseUserResponse from '../response/purchaseUser.response';
import UserResponse from '../response/user.response';

export default class UserMapper {
  static requestToEntity(userRequest: UserRequest): UserEntity {
    return new UserEntity(
      userRequest.username,
      userRequest.email,
      userRequest.name,
    );
  }

  static entityToResponse(userEntity: UserEntity): UserResponse {
    return new UserResponse(
      userEntity.id,
      userEntity.username,
      userEntity.email,
      userEntity.name,
    );
  }

  static contractToResponse(contract: PurchaseUser): PurchaseUserResponse {
    return new PurchaseUserResponse(
      contract.id,
      contract.status,
      contract.dateOperation,
      contract.username,
      contract.email,
      contract.name,
    );
  }
}
