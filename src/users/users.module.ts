import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CurrentUseIinterceptors } from './interceptors/current-user.interceptors';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, AuthService,{
    provide:APP_INTERCEPTOR,
    useClass:CurrentUseIinterceptors
  }],
})
export class UsersModule {}
