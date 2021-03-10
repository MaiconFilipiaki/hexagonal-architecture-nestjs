import { HttpException, HttpStatus } from '@nestjs/common';

export class BusinessException extends HttpException {
  static EMAIL_NOT_INFORMATION = 'Email not information';
  static EMAIL_ALREADY_EXISTS = 'Email already exists';

  constructor(message) {
    super(message || 'BusinessException', HttpStatus.UNPROCESSABLE_ENTITY);
  }
}
