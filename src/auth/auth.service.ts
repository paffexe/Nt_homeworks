import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { AdminDocument } from "../admin/schemas/admin.entity";

import { JwtService } from "@nestjs/jwt";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { AdminService } from "../admin/admin.service";
import { LogInAdminDto } from "../admin/dto/login-admin.dto";
import * as bcrypt from "bcrypt";
import { Response } from "express";
import { CustomerDocument } from "../customer/schemas/customer.entity";
import { CreateCustomerDto } from "../customer/dto/create-customer.dto";
import { CustomerService } from "../customer/customer.service";
import { LoginCustomerDto } from "../customer/dto/login-user.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly adminService: AdminService,
    private readonly customerService: CustomerService
  ) {}
  async generateTokens(admin: AdminDocument) {
    const payload = {
      id: admin._id,
      is_active: admin.is_active,
      is_creator: admin.is_creator,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);
    return {
      accessToken,
      refreshToken,
    };
  }

  async generateUserTokens(customer: CustomerDocument) {
    const payload = {
      id: customer._id,
      is_active: customer.is_active,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.USER_ACCESS_TOKEN_KEY,
        expiresIn: process.env.USER_ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.USER_REFRESH_TOKEN_KEY,
        expiresIn: process.env.USER_REFRESH_TOKEN_TIME,
      }),
    ]);
    return {
      accessToken,
      refreshToken,
    };
  }

  //for admin
  async register(createAdminDto: CreateAdminDto) {
    const candidate = await this.adminService.findByEmail(createAdminDto.email);

    if (candidate) {
      throw new ConflictException("Bunday email bilan ro'yxatdan o'tilgan");
    }
    const admin = await this.adminService.create(createAdminDto);

    return { adminId: admin._id };
  }

  //for admin
  async login(loginAdminDto: LogInAdminDto, res: Response) {
    const admin = await this.adminService.findByEmail(loginAdminDto.email);

    if (!admin) {
      throw new UnauthorizedException("Email yoki password noto'g'ri");
    }

    const isMatched = await bcrypt.compare(
      loginAdminDto.password,
      admin.password
    );

    if (!isMatched) {
      throw new UnauthorizedException("Email yoki password noto'g'ri");
    }

    const { accessToken, refreshToken } = await this.generateTokens(admin);
    admin.refresh_token = await bcrypt.hash(refreshToken, 7);

    await admin.save();
    res.cookie("refreshToken", refreshToken, {
      maxAge: +process.env.COOKIE_TIME!,
      httpOnly: true,
    });

    return { adminId: admin._id, accessToken };
  }

  async logout(refreshToken: string, res: Response) {
    let userData: any;

    try {
      userData = await this.jwtService.verify(refreshToken, {
        secret: process.env.REFRESH_TOKEN_KEY,
      });
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }

    if (!userData) {
      throw new ForbiddenException("User is not verified");
    }

    await this.adminService.updateRefreshToken(userData._id, "");
    res.clearCookie("refreshToken");

    return {
      message: "User logged out successfully",
    };
  }

  async updateRefreshToken(
    adminId: string,
    refreshTokenFromCookie: string,
    res: Response
  ) {
    const decodedToken = await this.jwtService.decode(refreshTokenFromCookie);

    if (adminId != decodedToken["id"]) {
      throw new ForbiddenException("Ruxsat etilmagan");
    }

    const admin = await this.adminService.findOne(adminId.toString());

    if (!admin || !admin.refresh_token) {
      throw new NotFoundException("User not found");
    }

    const { accessToken, refreshToken } = await this.generateTokens(admin);

    const refresh_token = await bcrypt.hash(refreshToken, 7);

    await this.adminService.updateRefreshToken(admin.id, refresh_token);

    res.cookie("refreshToken", refreshToken, {
      maxAge: Number(process.env.COOKIE_TIME),
      httpOnly: true,
    });

    const response = {
      message: "Refresh token updated",
      adminId: admin.id,
      accessToken: accessToken,
    };

    return response;
  }

  //for user
  async signup(createUserDto: CreateCustomerDto) {
    const candidate = await this.customerService.findByEmail(
      createUserDto.email
    );

    if (candidate) {
      throw new ConflictException("Bunday email bilan ro'yxatdan o'tilgan");
    }
    const customer = await this.customerService.create(createUserDto);

    return { customerId: customer._id };
  }

  async loginUser(loginCustomerDto: LoginCustomerDto, res: Response) {
    const customer = await this.customerService.findByEmail(
      loginCustomerDto.email
    );

    if (!customer) {
      throw new UnauthorizedException("Email yoki password noto'g'ri");
    }

    const isMatched = await bcrypt.compare(
      loginCustomerDto.password,
      customer.password
    );

    if (!isMatched) {
      throw new UnauthorizedException("Email yoki password noto'g'ri");
    }

    const { accessToken, refreshToken } =
      await this.generateUserTokens(customer);
    customer.refresh_token = await bcrypt.hash(refreshToken, 7);

    await customer.save();
    res.cookie("refreshToken", refreshToken, {
      maxAge: +process.env.USER_COOKIE_TIME!,
      httpOnly: true,
    });

    return { customerId: customer._id, accessToken };
  }

  async logoutUser(refreshToken: string, res: Response) {
    let userData: any;

    try {
      userData = await this.jwtService.verify(refreshToken, {
        secret: process.env.USER_REFRESH_TOKEN_KEY,
      });
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }

    if (!userData) {
      throw new ForbiddenException("User is not verified");
    }

    await this.adminService.updateRefreshToken(userData._id, "");
    res.clearCookie("refreshToken");

    return {
      message: "User logged out successfully",
    };
  }

  async updateUserRefreshToken(
    userId: string,
    refreshTokenFromCookie: string,
    res: Response
  ) {
    const decodedToken = await this.jwtService.decode(refreshTokenFromCookie);

    if (userId != decodedToken["id"]) {
      throw new ForbiddenException("Ruxsat etilmagan");
    }

    const user = await this.customerService.findOne(userId.toString());

    if (!user || !user.refresh_token) {
      throw new NotFoundException("User not found");
    }

    const { accessToken, refreshToken } = await this.generateUserTokens(user);

    const refresh_token = await bcrypt.hash(refreshToken, 7);

    await this.customerService.updateRefreshToken(user.id, refresh_token);

    res.cookie("refreshToken", refreshToken, {
      maxAge: Number(process.env.COOKIE_TIME),
      httpOnly: true,
    });

    const response = {
      message: "Refresh token updated",
      userId: user.id,
      accessToken: accessToken,
    };

    return response;
  }
  
}
