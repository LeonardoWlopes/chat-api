import { User } from '@app/entities/user'
import { UsersRepository } from '@app/repositories/user.repository'
import { PrismaService } from '../prisma.service'
import { PrismaUserMapper } from '../mappers/prisma-user.mapper'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaUserRepository implements UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async verifyIfExists(user: User): Promise<User> {
    const { phoneNumber, email } = user

    const userExists = await this.prismaService.user.findFirst({
      where: { OR: [{ phoneNumber }, { email }] },
    })

    if (!userExists) return null

    return PrismaUserMapper.toDomain(userExists)
  }

  async create(data: User): Promise<void> {
    await this.prismaService.user.create({
      data: PrismaUserMapper.toPrisma(data),
    })
  }
}
