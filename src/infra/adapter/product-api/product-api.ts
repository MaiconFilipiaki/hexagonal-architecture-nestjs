import { HttpService, Injectable } from '@nestjs/common';
import BuyReceveid from './contract/receveid/buy.receveid';
import BuySended from './contract/sended/buy.sended';

@Injectable()
export class ProductApi {
  constructor(private httpService: HttpService) {}

  async buyProductByUser(buySended: BuySended): Promise<BuyReceveid> {
    try {
      return await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(
            new BuyReceveid(
              'fd381a1b4053d0f1f473b3804d42adf7',
              'F',
              new Date().getTime(),
            ),
          );
        }, 3000);
      });
    } catch (err) {
      throw new Error(err);
    }
  }
}
