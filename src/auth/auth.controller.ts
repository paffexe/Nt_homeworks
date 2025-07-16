import {
  Body,
  Controller,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Res,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { LogInAdminDto } from "../admin/dto/login-admin.dto";
import { Response } from "express";
import { CookieGetter } from "../common/decorators/cookie-getter";
import { CreateCustomerDto } from "../customer/dto/create-customer.dto";
import { LoginCustomerDto } from "../customer/dto/login-user.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  async register(@Body() createAdminDto: CreateAdminDto) {
    return this.authService.register(createAdminDto);
  }

  //user
  @Post("register/user")
  async registerUser(@Body() createCustomerDto: CreateCustomerDto) {
    return this.authService.signup(createCustomerDto);
  }

  @Post("login")
  async login(
    @Body() loginAdminDto: LogInAdminDto,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.login(loginAdminDto, res);
  }

  //user
  @Post("login/user")
  async loginUser(
    @Body() loginCustomerDto: LoginCustomerDto,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.loginUser(loginCustomerDto, res);
  }

  @HttpCode(200)
  @Post("logout")
  signout(
    @CookieGetter("refreshToken") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.logout(refreshToken, res);
  }

  //user
  @HttpCode(200)
  @Post("logout")
  signoutUser(
    @CookieGetter("refreshToken") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.logoutUser(refreshToken, res);
  }

  @HttpCode(200)
  @Post(":id/refresh")
  refresh(
    @Param("id") id: string,
    @CookieGetter("refreshToken") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.updateRefreshToken(id, refreshToken, res);
  }

  //user
  @HttpCode(200)
  @Post(":id/refresh/user")
  refreshUser(
    @Param("id") id: string,
    @CookieGetter("refreshToken") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.updateUserRefreshToken(id, refreshToken, res);
  }
}
