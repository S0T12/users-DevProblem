import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('createUser')
  async create(@Payload() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @MessagePattern('findAllUsers')
  async findAll() {
    return await this.usersService.findAll();
  }

  @MessagePattern('findOneUser')
  async findOne(@Payload() id: number) {
    return await this.usersService.findOne(id);
  }

  @MessagePattern('updateUser')
  async update(
    @Payload() payload: { id: number; updateUserDto: UpdateUserDto },
  ) {
    return await this.usersService.update(payload.id, payload.updateUserDto);
  }

  @MessagePattern('removeUser')
  async remove(@Payload() id: number) {
    return await this.usersService.remove(id);
  }
}
