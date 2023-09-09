import { AuthModule } from '@infra/modules/auth/auth.module'
import { Module } from '@nestjs/common'
import { UsersModule } from './infra/modules/users/users.module'
import { DatabaseModule } from '@infra/database/database.module'

@Module({
  imports: [DatabaseModule, AuthModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
