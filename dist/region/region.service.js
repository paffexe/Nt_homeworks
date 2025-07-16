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
exports.RegionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const region_entity_1 = require("./schemas/region.entity");
let RegionService = class RegionService {
    regionSchema;
    constructor(regionSchema) {
        this.regionSchema = regionSchema;
    }
    async create(createRegionDto) {
        return this.regionSchema.create(createRegionDto);
    }
    findAll() {
        return this.regionSchema.find().populate("districts");
    }
    findOne(id) {
        return this.regionSchema.findById(id);
    }
    update(id, updateRegionDto) {
        return this.regionSchema.findByIdAndUpdate(id, updateRegionDto);
    }
    remove(id) {
        return this.regionSchema.findByIdAndDelete(id);
    }
};
exports.RegionService = RegionService;
exports.RegionService = RegionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(region_entity_1.Region.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RegionService);
//# sourceMappingURL=region.service.js.map