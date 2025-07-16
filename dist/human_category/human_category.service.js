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
exports.HumanCategoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const human_category_entity_1 = require("./schemas/human_category.entity");
let HumanCategoryService = class HumanCategoryService {
    humanCategorySchema;
    constructor(humanCategorySchema) {
        this.humanCategorySchema = humanCategorySchema;
    }
    async create(createHumanCategoryDto) {
        return this.humanCategorySchema.create(createHumanCategoryDto);
    }
    findAll() {
        return this.humanCategorySchema.find();
    }
    findOne(id) {
        return this.humanCategorySchema.findById(id);
    }
    update(id, updateHumanCategoryDto) {
        return this.humanCategorySchema.findByIdAndUpdate(id, updateHumanCategoryDto);
    }
    remove(id) {
        return this.humanCategorySchema.findByIdAndDelete(id);
    }
};
exports.HumanCategoryService = HumanCategoryService;
exports.HumanCategoryService = HumanCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(human_category_entity_1.HumanCategory.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], HumanCategoryService);
//# sourceMappingURL=human_category.service.js.map