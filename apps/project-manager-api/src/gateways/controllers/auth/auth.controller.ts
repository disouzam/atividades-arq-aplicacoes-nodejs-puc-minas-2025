import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Public } from '@project-manager-api/gateways/guards/auth-guard.service';
import { LoginDto } from './dtos/login.dto';
import { AuthService } from '@project-manager-api/infrastructure/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @Public()
  async login(@Body() loginDto: LoginDto) {
    console.log(
      `\nObtenção de access_token para o usuário ${JSON.stringify(loginDto)}`,
    );

    const result = await this.authService.login(
      loginDto.email,
      loginDto.password,
    );

    console.log(`Access token obtido com sucesso: ${JSON.stringify(result)}`);
    return result;
  }
}
