import { ApiProperty } from '@nestjs/swagger';

export default class UserResponse {
  constructor(id: string, username: string, email: string, name: string) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.name = name;
  }

  @ApiProperty()
  id: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  name: string;
}
