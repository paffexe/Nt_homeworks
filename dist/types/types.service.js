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
exports.TypesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const type_entity_1 = require("./schemas/type.entity");
let TypesService = class TypesService {
    typeSchema;
    constructor(typeSchema) {
        this.typeSchema = typeSchema;
    }
    async create(createTypeDto) {
        const data = await this.typeSchema.create(createTypeDto);
        return data;
    }
    async findAll() {
        const data = await this.typeSchema.find();
        return data;
    }
    findOne(id) {
        return this.typeSchema.findById(id);
    }
    update(id, updateTypeDto) {
        return this.typeSchema.findByIdAndUpdate(id, updateTypeDto);
    }
    remove(id) {
        return this.typeSchema.findByIdAndDelete(id);
    }
};
exports.TypesService = TypesService;
exports.TypesService = TypesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(type_entity_1.Type.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TypesService);
//# sourceMappingURL=types.service.js.map