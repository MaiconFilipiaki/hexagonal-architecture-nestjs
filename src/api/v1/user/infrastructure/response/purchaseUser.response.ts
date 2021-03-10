import { ApiProperty } from '@nestjs/swagger';

export default class PurchaseUserResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  dateOperation: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  name: string;

  constructor(
    id: string,
    status: string,
    dateOperation: number,
    username: string,
    email: string,
    name: string,
  ) {
    this.id = id;
    this.status = status;
    this.dateOperation = dateOperation;
    this.username = username;
    this.email = email;
    this.name = name;
  }
}
