"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const admin_service_1 = require("../admin/admin.service");
const bcrypt = require("bcrypt");
const customer_service_1 = require("../customer/customer.service");
let AuthService = class AuthService {
    jwtService;
    adminService;
    customerService;
    constructor(jwtService, adminService, customerService) {
        this.jwtService = jwtService;
        this.adminService = adminService;
        this.customerService = customerService;
    }
    async generateTokens(admin) {
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
    async generateUserTokens(customer) {
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
    async register(createAdminDto) {
        const candidate = await this.adminService.findByEmail(createAdminDto.email);
        if (candidate) {
            throw new common_1.ConflictException("Bunday email bilan ro'yxatdan o'tilgan");
        }
        const admin = await this.adminService.create(createAdminDto);
        return { adminId: admin._id };
    }
    async login(loginAdminDto, res) {
        const admin = await this.adminService.findByEmail(loginAdminDto.email);
        if (!admin) {
            throw new common_1.UnauthorizedException("Email yoki password noto'g'ri");
        }
        const isMatched = await bcrypt.compare(loginAdminDto.password, admin.password);
        if (!isMatched) {
            throw new common_1.UnauthorizedException("Email yoki password noto'g'ri");
        }
        const { accessToken, refreshToken } = await this.generateTokens(admin);
        admin.refresh_token = await bcrypt.hash(refreshToken, 7);
        await admin.save();
        res.cookie("refreshToken", refreshToken, {
            maxAge: +process.env.COOKIE_TIME,
            httpOnly: true,
        });
        return { adminId: admin._id, accessToken };
    }
    async logout(refreshToken, res) {
        let userData;
        try {
            userData = await this.jwtService.verify(refreshToken, {
                secret: process.env.REFRESH_TOKEN_KEY,
            });
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error);
        }
        if (!userData) {
            throw new common_1.ForbiddenException("User is not verified");
        }
        await this.adminService.updateRefreshToken(userData._id, "");
        res.clearCookie("refreshToken");
        return {
            message: "User logged out successfully",
        };
    }
    async updateRefreshToken(adminId, refreshTokenFromCookie, res) {
        const decodedToken = await this.jwtService.decode(refreshTokenFromCookie);
        if (adminId != decodedToken["id"]) {
            throw new common_1.ForbiddenException("Ruxsat etilmagan");
        }
        const admin = await this.adminService.findOne(adminId.toString());
        if (!admin || !admin.refresh_token) {
            throw new common_1.NotFoundException("User not found");
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
    async signup(createUserDto) {
        const candidate = await this.customerService.findByEmail(createUserDto.email);
        if (candidate) {
            throw new common_1.ConflictException("Bunday email bilan ro'yxatdan o'tilgan");
        }
        const customer = await this.customerService.create(createUserDto);
        return { customerId: customer._id };
    }
    async loginUser(loginCustomerDto, res) {
        const customer = await this.customerService.findByEmail(loginCustomerDto.email);
        if (!customer) {
            throw new common_1.UnauthorizedException("Email yoki password noto'g'ri");
        }
        const isMatched = await bcrypt.compare(loginCustomerDto.password, customer.password);
        if (!isMatched) {
            throw new common_1.UnauthorizedException("Email yoki password noto'g'ri");
        }
        const { accessToken, refreshToken } = await this.generateUserTokens(customer);
        customer.refresh_token = await bcrypt.hash(refreshToken, 7);
        await customer.save();
        res.cookie("refreshToken", refreshToken, {
            maxAge: +process.env.USER_COOKIE_TIME,
            httpOnly: true,
        });
        return { customerId: customer._id, accessToken };
    }
    async logoutUser(refreshToken, res) {
        let userData;
        try {
            userData = await this.jwtService.verify(refreshToken, {
                secret: process.env.USER_REFRESH_TOKEN_KEY,
            });
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error);
        }
        if (!userData) {
            throw new common_1.ForbiddenException("User is not verified");
        }
        await this.adminService.updateRefreshToken(userData._id, "");
        res.clearCookie("refreshToken");
        return {
            message: "User logged out successfully",
        };
    }
    async updateUserRefreshToken(userId, refreshTokenFromCookie, res) {
        const decodedToken = await this.jwtService.decode(refreshTokenFromCookie);
        if (userId != decodedToken["id"]) {
            throw new common_1.ForbiddenException("Ruxsat etilmagan");
        }
        const user = await this.customerService.findOne(userId.toString());
        if (!user || !user.refresh_token) {
            throw new common_1.NotFoundException("User not found");
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
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        admin_service_1.AdminService,
        customer_service_1.CustomerService])
], AuthService);
//# sourceMappingURL=auth.service.js.map