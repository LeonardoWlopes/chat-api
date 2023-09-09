import { Body, Controller, Post } from '@nestjs/common'
import { RegisterDTO } from './dtos/register.dto'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() payload: RegisterDTO) {
    return await this.authService.register(payload)
  }
}
