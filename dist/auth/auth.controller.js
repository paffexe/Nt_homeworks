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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const create_admin_dto_1 = require("../admin/dto/create-admin.dto");
const login_admin_dto_1 = require("../admin/dto/login-admin.dto");
const cookie_getter_1 = require("../common/decorators/cookie-getter");
const create_customer_dto_1 = require("../customer/dto/create-customer.dto");
const login_user_dto_1 = require("../customer/dto/login-user.dto");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async register(createAdminDto) {
        return this.authService.register(createAdminDto);
    }
    async registerUser(createCustomerDto) {
        return this.authService.signup(createCustomerDto);
    }
    async login(loginAdminDto, res) {
        return this.authService.login(loginAdminDto, res);
    }
    async loginUser(loginCustomerDto, res) {
        return this.authService.loginUser(loginCustomerDto, res);
    }
    signout(refreshToken, res) {
        return this.authService.logout(refreshToken, res);
    }
    signoutUser(refreshToken, res) {
        return this.authService.logoutUser(refreshToken, res);
    }
    refresh(id, refreshToken, res) {
        return this.authService.updateRefreshToken(id, refreshToken, res);
    }
    refreshUser(id, refreshToken, res) {
        return this.authService.updateUserRefreshToken(id, refreshToken, res);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)("register"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_admin_dto_1.CreateAdminDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)("register/user"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_customer_dto_1.CreateCustomerDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registerUser", null);
__decorate([
    (0, common_1.Post)("login"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_admin_dto_1.LogInAdminDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)("login/user"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.LoginCustomerDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginUser", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)("logout"),
    __param(0, (0, cookie_getter_1.CookieGetter)("refreshToken")),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signout", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)("logout"),
    __param(0, (0, cookie_getter_1.CookieGetter)("refreshToken")),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signoutUser", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)(":id/refresh"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, cookie_getter_1.CookieGetter)("refreshToken")),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)(":id/refresh/user"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, cookie_getter_1.CookieGetter)("refreshToken")),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "refreshUser", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)("auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map