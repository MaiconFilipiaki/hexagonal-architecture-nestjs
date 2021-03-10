import { Body, Controller, Param, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import UserMapper from './infrastructure/mapper/user.mapper';
import UserRequest from './infrastructure/request/user.request';
import PurchaseUserResponse from './infrastructure/response/purchaseUser.response';
import UserResponse from './infrastructure/response/user.response';
import { UserService } from './user.service';

@Controller()
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOkResponse({ description: 'Success', type: [UserResponse] })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
  async createUser(@Body() userRequest: UserRequest) {
    return this.userService.createUser(UserMapper.requestToEntity(userRequest));
  }

  @Post('buy/:email')
  @ApiOkResponse({ description: 'Success', type: [UserResponse] })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
  async purchaseUser(
    @Param('email') email: string,
  ): Promise<PurchaseUserResponse> {
    return this.userService.purchaseUser(email);
  }
}
