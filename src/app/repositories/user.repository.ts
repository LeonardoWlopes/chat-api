import { User } from '@app/entities/user'

export abstract class UsersRepository {
  abstract verifyIfExists(user: User): Promise<User>
  abstract create(data: User): Promise<void>
}
