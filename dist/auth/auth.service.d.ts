import { AdminDocument } from "../admin/schemas/admin.entity";
import { JwtService } from "@nestjs/jwt";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { AdminService } from "../admin/admin.service";
import { LogInAdminDto } from "../admin/dto/login-admin.dto";
import { Response } from "express";
import { CustomerDocument } from "../customer/schemas/customer.entity";
import { CreateCustomerDto } from "../customer/dto/create-customer.dto";
import { CustomerService } from "../customer/customer.service";
import { LoginCustomerDto } from "../customer/dto/login-user.dto";
export declare class AuthService {
    private readonly jwtService;
    private readonly adminService;
    private readonly customerService;
    constructor(jwtService: JwtService, adminService: AdminService, customerService: CustomerService);
    generateTokens(admin: AdminDocument): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    generateUserTokens(customer: CustomerDocument): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    register(createAdminDto: CreateAdminDto): Promise<{
        adminId: import("mongoose").Types.ObjectId;
    }>;
    login(loginAdminDto: LogInAdminDto, res: Response): Promise<{
        adminId: import("mongoose").Types.ObjectId;
        accessToken: string;
    }>;
    logout(refreshToken: string, res: Response): Promise<{
        message: string;
    }>;
    updateRefreshToken(adminId: string, refreshTokenFromCookie: string, res: Response): Promise<{
        message: string;
        adminId: any;
        accessToken: string;
    }>;
    signup(createUserDto: CreateCustomerDto): Promise<{
        customerId: import("mongoose").Types.ObjectId;
    }>;
    loginUser(loginCustomerDto: LoginCustomerDto, res: Response): Promise<{
        customerId: import("mongoose").Types.ObjectId;
        accessToken: string;
    }>;
    logoutUser(refreshToken: string, res: Response): Promise<{
        message: string;
    }>;
    updateUserRefreshToken(userId: string, refreshTokenFromCookie: string, res: Response): Promise<{
        message: string;
        userId: any;
        accessToken: string;
    }>;
}
