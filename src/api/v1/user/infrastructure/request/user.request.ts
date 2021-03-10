import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export default class UserRequest {
  @ApiProperty({
    name: 'username',
    type: 'string',
    description: `User's username`,
    example: 'mdfilipiaki',
  })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({
    name: 'email',
    type: 'string',
    description: `User's email`,
    example: 'mdfilipiaki@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    name: 'name',
    type: 'string',
    description: `User's name`,
    example: 'Maicon Douglas Filipiaki',
  })
  @IsNotEmpty()
  @IsString()
  name: string;
}
