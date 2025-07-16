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
exports.VenuePhotoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const venue_photo_entity_1 = require("./schemas/venue_photo.entity");
const venue_entity_1 = require("../venue/schemas/venue.entity");
let VenuePhotoService = class VenuePhotoService {
    venuePhotoSchema;
    venueSchema;
    constructor(venuePhotoSchema, venueSchema) {
        this.venuePhotoSchema = venuePhotoSchema;
        this.venueSchema = venueSchema;
    }
    async create(createVenuePhotoDto) {
        const { venue_id } = createVenuePhotoDto;
        if (!(0, mongoose_2.isValidObjectId)(venue_id)) {
            throw new common_1.BadRequestException("Venue_id noto'g'ri");
        }
        const venue = await this.venueSchema.findById(venue_id);
        if (!venue) {
            throw new common_1.BadRequestException("Bunday venue yo'q");
        }
        const venuePhoto = await this.venuePhotoSchema.create(createVenuePhotoDto);
        return venuePhoto;
    }
    findAll() {
        return this.venuePhotoSchema.find();
    }
    findOne(id) {
        return this.venuePhotoSchema.findById(id);
    }
    update(id, updateVenuePhotoDto) {
        return this.venuePhotoSchema.findByIdAndUpdate(id, updateVenuePhotoDto);
    }
    remove(id) {
        return this.venuePhotoSchema.findByIdAndDelete(id);
    }
};
exports.VenuePhotoService = VenuePhotoService;
exports.VenuePhotoService = VenuePhotoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(venue_photo_entity_1.VenuePhoto.name)),
    __param(1, (0, mongoose_1.InjectModel)(venue_entity_1.Venue.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], VenuePhotoService);
//# sourceMappingURL=venue_photo.service.js.map