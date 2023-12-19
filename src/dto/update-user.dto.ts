import { PickType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PickType(CreateUserDto, [
  'name',
  'password',
  'email',
]) {
  id: number;
}
