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
exports.VenueTypesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const venue_type_entity_1 = require("./schemas/venue_type.entity");
let VenueTypesService = class VenueTypesService {
    venueTypeSchema;
    constructor(venueTypeSchema) {
        this.venueTypeSchema = venueTypeSchema;
    }
    async create(createVenueTypeDto) {
        return this.venueTypeSchema.create(createVenueTypeDto);
    }
    findAll() {
        return this.venueTypeSchema.find();
    }
    findOne(id) {
        return this.venueTypeSchema.findById(id);
    }
    update(id, updateVenueTypeDto) {
        return this.venueTypeSchema.findByIdAndUpdate(id, updateVenueTypeDto);
    }
    remove(id) {
        return this.venueTypeSchema.findByIdAndDelete(id);
    }
};
exports.VenueTypesService = VenueTypesService;
exports.VenueTypesService = VenueTypesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(venue_type_entity_1.VenueType.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], VenueTypesService);
//# sourceMappingURL=venue_types.service.js.map