import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { GetUserByEmailService } from '@project-manager-api/domain/use-cases/users/get-user-by-email.service';

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
      const access_token = await this.jwtService.signAsync(payload);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const token_decoded = this.jwtService.decode(access_token);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const expiration_time = token_decoded.exp;

      const formattedExpirationTime = new Date(expiration_time * 1000);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      console.info(
        `Token expira em: ${JSON.stringify(formattedExpirationTime)}`,
      );

      return {
        access_token: access_token,
      };
    } catch (error) {
      throw new NotFoundException('Usuário não encontrado');
    }
  }
}
