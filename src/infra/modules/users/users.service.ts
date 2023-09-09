import { User } from '@app/entities/user'
import { UsersRepository } from '@app/repositories/user.repository'
import { Injectable } from '@nestjs/common'

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async verifyIfExists(user: User) {
    const userExists = await this.usersRepository.verifyIfExists(user)

    return userExists
  }

  async create(user: User) {
    await this.usersRepository.create(user)
  }
}
