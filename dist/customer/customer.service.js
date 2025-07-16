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
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const customer_entity_1 = require("./schemas/customer.entity");
let CustomerService = class CustomerService {
    customerModel;
    constructor(customerModel) {
        this.customerModel = customerModel;
    }
    async create(createCustomerDto) {
        const { password, confirm_password } = createCustomerDto;
        if (password !== confirm_password) {
            throw new common_1.BadRequestException("Passwords must match each other!");
        }
        const hashedPassword = await bcrypt.hash(password, 7);
        return this.customerModel.create({
            ...createCustomerDto,
            password: hashedPassword,
        });
    }
    findAll() {
        return this.customerModel.find();
    }
    findOne(id) {
        return this.customerModel.findById(id);
    }
    findByEmail(email) {
        return this.customerModel.findOne({ email });
    }
    update(id, updateCustomerDto) {
        return this.customerModel.findByIdAndUpdate(id, updateCustomerDto);
    }
    remove(id) {
        return this.customerModel.findByIdAndDelete(id);
    }
    async updateRefreshToken(id, refresh_token) {
        return this.customerModel.findByIdAndUpdate(id, { refresh_token });
    }
};
exports.CustomerService = CustomerService;
exports.CustomerService = CustomerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(customer_entity_1.Customer.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CustomerService);
//# sourceMappingURL=customer.service.js.map