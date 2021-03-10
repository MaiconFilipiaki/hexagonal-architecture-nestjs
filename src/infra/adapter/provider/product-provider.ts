import { Injectable } from '@nestjs/common';
import { UserRepo } from '../database/repository/User.repository';
import BuySended from '../product-api/contract/sended/buy.sended';
import { ProductApi } from '../product-api/product-api';
import PurchaseUser from './contract/receveid/purchaseUser.receveid';

@Injectable()
export class ProductProvider {
  constructor(
    private readonly userRepository: UserRepo,
    private readonly productApi: ProductApi,
  ) {}

  async findUserAndBuyProduct(email: string): Promise<PurchaseUser> {
    const user = await this.userRepository.findByEmail(email);
    const responseBuy = await this.productApi.buyProductByUser(
      new BuySended(user.email, user.name, 'f23f-f32f'),
    );
    return new PurchaseUser(
      responseBuy.id,
      responseBuy.status,
      responseBuy.dateOperation,
      user.username,
      user.email,
      user.name,
    );
  }
}
