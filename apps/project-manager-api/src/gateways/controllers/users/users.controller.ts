import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateUserService } from '@project-manager-api/domain/use-cases/users/create-user.service';
import { GetUserByIdService } from '@project-manager-api/domain/use-cases/users/get-user-by-id.service';
import { GetAllUsersService } from '@project-manager-api/domain/use-cases/users/get-all-users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { Public } from '@project-manager-api/gateways/guards/auth-guard.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly getUserUseCase: GetUserByIdService,
    private readonly createUserUseCase: CreateUserService,
    private readonly getAllUsersUseCase: GetAllUsersService,
  ) {}

  @Get()
  async findAll() {
    try {
      return await this.getAllUsersUseCase.execute();
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      return await this.getUserUseCase.execute(+id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Post()
  @Public()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      console.log(
        `\nCriando usuário com os dados: ${JSON.stringify(createUserDto)}`,
      );

      const result = await this.createUserUseCase.execute({
        ...createUserDto,
      });

      console.log(`Usuário criado com sucesso. ID do usuário: ${result.id}`);
      return result;
    } catch (error) {
      console.error(
        `Erro na criação do usuário: ${JSON.stringify(createUserDto)} devido ao erro: ${error.message}`,
      );
      throw new UnprocessableEntityException(error.message);
    }
  }
}
