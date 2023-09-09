import { HttpStatus, HttpException, Injectable } from '@nestjs/common'
import { RegisterDTO } from './dtos/register.dto'
import { User } from '@app/entities/user'
import { UsersService } from '../users/users.service'

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async register(payload: RegisterDTO) {
    const user = new User(payload)

    const existentUser = await this.usersService.verifyIfExists(user)

    if (existentUser) {
      throw new HttpException('User already exists', HttpStatus.CONFLICT)
    }

    await this.usersService.create(user)
  }
}
