import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { GetUserByEmailService } from 'src/domain/use-cases/users/get-user-by-email.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly getUserByEmailUserCase: GetUserByEmailService,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    try {
      const user = await this.getUserByEmailUserCase.execute(email);

      const isAValidUser = await compare(password, user.password);

      if (!isAValidUser) {
        throw new UnauthorizedException();
      }

      const payload = { sub: user.id, email: user.email };

      return {
        access_token: this.jwtService.signAsync(payload),
      };
    } catch (error) {
      throw new NotFoundException('Usuário não encontrado');
    }
  }
}
