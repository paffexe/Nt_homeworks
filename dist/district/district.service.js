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
exports.DistrictService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const district_entity_1 = require("./schemas/district.entity");
const region_entity_1 = require("../region/schemas/region.entity");
let DistrictService = class DistrictService {
    districtSchema;
    regionSchema;
    constructor(districtSchema, regionSchema) {
        this.districtSchema = districtSchema;
        this.regionSchema = regionSchema;
    }
    async create(createDistrictDto) {
        const { region_id } = createDistrictDto;
        if (!(0, mongoose_2.isValidObjectId)(region_id)) {
            throw new common_1.BadRequestException("Region is incorrect");
        }
        const region = await this.regionSchema.findById(region_id);
        if (!region) {
            throw new common_1.BadRequestException("Bunday region yo'q");
        }
        const district = await this.districtSchema.create(createDistrictDto);
        region.districts.push(district);
        await region.save();
        return district;
    }
    findAll() {
        return this.districtSchema.find().populate("region_id");
    }
    findOne(id) {
        return this.districtSchema.findById(id);
    }
    update(id, updateDistrictDto) {
        return this.districtSchema.findByIdAndUpdate(id, updateDistrictDto);
    }
    remove(id) {
        return this.districtSchema.findByIdAndDelete(id);
    }
};
exports.DistrictService = DistrictService;
exports.DistrictService = DistrictService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(district_entity_1.District.name)),
    __param(1, (0, mongoose_1.InjectModel)(region_entity_1.Region.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], DistrictService);
//# sourceMappingURL=district.service.js.map