import { AuthService } from "./auth.service";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { LogInAdminDto } from "../admin/dto/login-admin.dto";
import { Response } from "express";
import { CreateCustomerDto } from "../customer/dto/create-customer.dto";
import { LoginCustomerDto } from "../customer/dto/login-user.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(createAdminDto: CreateAdminDto): Promise<{
        adminId: import("mongoose").Types.ObjectId;
    }>;
    registerUser(createCustomerDto: CreateCustomerDto): Promise<{
        customerId: import("mongoose").Types.ObjectId;
    }>;
    login(loginAdminDto: LogInAdminDto, res: Response): Promise<{
        adminId: import("mongoose").Types.ObjectId;
        accessToken: string;
    }>;
    loginUser(loginCustomerDto: LoginCustomerDto, res: Response): Promise<{
        customerId: import("mongoose").Types.ObjectId;
        accessToken: string;
    }>;
    signout(refreshToken: string, res: Response): Promise<{
        message: string;
    }>;
    signoutUser(refreshToken: string, res: Response): Promise<{
        message: string;
    }>;
    refresh(id: string, refreshToken: string, res: Response): Promise<{
        message: string;
        adminId: any;
        accessToken: string;
    }>;
    refreshUser(id: string, refreshToken: string, res: Response): Promise<{
        message: string;
        userId: any;
        accessToken: string;
    }>;
}
