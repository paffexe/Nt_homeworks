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
exports.VenueService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const venue_entity_1 = require("./schemas/venue.entity");
const mongoose_2 = require("mongoose");
const region_entity_1 = require("../region/schemas/region.entity");
const district_entity_1 = require("../district/schemas/district.entity");
const venue_photo_entity_1 = require("../venue_photo/schemas/venue_photo.entity");
let VenueService = class VenueService {
    venueSchema;
    regionSchema;
    districtSchema;
    photoSchema;
    constructor(venueSchema, regionSchema, districtSchema, photoSchema) {
        this.venueSchema = venueSchema;
        this.regionSchema = regionSchema;
        this.districtSchema = districtSchema;
        this.photoSchema = photoSchema;
    }
    async create(createVenueDto) {
        const { region_id, district_id, ...rest } = createVenueDto;
        if (!(0, mongoose_2.isValidObjectId)(region_id) || !(0, mongoose_2.isValidObjectId)(district_id)) {
            throw new common_1.BadRequestException("Region_id yoki District_id noto'g'ri");
        }
        const region = await this.regionSchema.findById(region_id);
        if (!region) {
            throw new common_1.BadRequestException("Bunday region yo'q");
        }
        const district = await this.districtSchema.findById(district_id);
        if (!district) {
            throw new common_1.BadRequestException("Bunday district yo'q");
        }
        const venue = await this.venueSchema.create({
            ...rest,
            regions: [region._id],
            districts: [district._id],
        });
        return venue;
    }
    findAll() {
        return this.venueSchema.find().populate("regions").populate("districts");
    }
    findOne(id) {
        return `This action returns a #${id} venue`;
    }
    update(id, updateVenueDto) {
        return `This action updates a #${id} venue`;
    }
    remove(id) {
        return `This action removes a #${id} venue`;
    }
};
exports.VenueService = VenueService;
exports.VenueService = VenueService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(venue_entity_1.Venue.name)),
    __param(1, (0, mongoose_1.InjectModel)(region_entity_1.Region.name)),
    __param(2, (0, mongoose_1.InjectModel)(district_entity_1.District.name)),
    __param(3, (0, mongoose_1.InjectModel)(venue_photo_entity_1.VenuePhoto.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], VenueService);
//# sourceMappingURL=venue.service.js.map