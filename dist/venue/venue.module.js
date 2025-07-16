"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VenueModule = void 0;
const common_1 = require("@nestjs/common");
const venue_service_1 = require("./venue.service");
const venue_controller_1 = require("./venue.controller");
const mongoose_1 = require("@nestjs/mongoose");
const venue_entity_1 = require("./schemas/venue.entity");
const region_entity_1 = require("../region/schemas/region.entity");
const district_entity_1 = require("../district/schemas/district.entity");
const venue_photo_entity_1 = require("../venue_photo/schemas/venue_photo.entity");
let VenueModule = class VenueModule {
};
exports.VenueModule = VenueModule;
exports.VenueModule = VenueModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: venue_entity_1.Venue.name,
                    schema: venue_entity_1.VenueSchema,
                },
                {
                    name: region_entity_1.Region.name,
                    schema: region_entity_1.RegionSchema,
                },
                {
                    name: district_entity_1.District.name,
                    schema: district_entity_1.DistrictSchema,
                },
                {
                    name: venue_photo_entity_1.VenuePhoto.name,
                    schema: venue_photo_entity_1.VenuePhotoSchema,
                },
            ]),
        ],
        controllers: [venue_controller_1.VenueController],
        providers: [venue_service_1.VenueService],
    })
], VenueModule);
//# sourceMappingURL=venue.module.js.map