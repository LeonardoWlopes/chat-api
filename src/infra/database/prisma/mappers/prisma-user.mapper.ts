import { User } from '@app/entities/user'
import { User as PrismaUser } from '@prisma/client'

export class PrismaUserMapper {
  static toPrisma(user: User): PrismaUser {
    return {
      id: user.id,
      userName: user.userName,
      email: user.email,
      password: user.password,
      phoneNumber: user.phoneNumber,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }
  }

  static toDomain(user: PrismaUser): User {
    return new User(
      {
        email: user.email,
        userName: user.userName,
        password: user.password,
        phoneNumber: user.phoneNumber,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      user.id,
    )
  }
}
