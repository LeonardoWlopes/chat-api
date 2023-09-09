import { IsEmail, IsNotEmpty, MinLength } from 'class-validator'

export class RegisterDTO {
  @IsNotEmpty()
  userName: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @MinLength(8)
  password: string

  @IsNotEmpty()
  phoneNumber: string
}
