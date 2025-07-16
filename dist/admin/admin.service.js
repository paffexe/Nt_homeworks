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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const admin_entity_1 = require("./schemas/admin.entity");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
let AdminService = class AdminService {
    adminShema;
    constructor(adminShema) {
        this.adminShema = adminShema;
    }
    async create(createAdminDto) {
        const { password, confirm_password } = createAdminDto;
        if (password !== confirm_password) {
            throw new common_1.BadRequestException("Passwords must match each other!");
        }
        const hashed_password = await bcrypt.hash(password, 7);
        console.log(hashed_password);
        return this.adminShema.create({
            ...createAdminDto,
            password: hashed_password,
        });
    }
    findAll() {
        return this.adminShema.find();
    }
    findOne(id) {
        return this.adminShema.findById(id);
    }
    findByEmail(email) {
        return this.adminShema.findOne({ email });
    }
    update(id, updateAdminDto) {
        return this.adminShema.findByIdAndUpdate(id, updateAdminDto);
    }
    remove(id) {
        return this.adminShema.findByIdAndDelete(id);
    }
    async updateRefreshToken(id, refresh_token) {
        const updatedUser = await this.adminShema.findByIdAndUpdate(id, {
            refresh_token,
        });
        return updatedUser;
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(admin_entity_1.Admin.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AdminService);
//# sourceMappingURL=admin.service.js.map