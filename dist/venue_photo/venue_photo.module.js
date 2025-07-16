"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VenuePhotoModule = void 0;
const common_1 = require("@nestjs/common");
const venue_photo_service_1 = require("./venue_photo.service");
const venue_photo_controller_1 = require("./venue_photo.controller");
const mongoose_1 = require("@nestjs/mongoose");
const venue_photo_entity_1 = require("./schemas/venue_photo.entity");
const venue_entity_1 = require("../venue/schemas/venue.entity");
let VenuePhotoModule = class VenuePhotoModule {
};
exports.VenuePhotoModule = VenuePhotoModule;
exports.VenuePhotoModule = VenuePhotoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: venue_photo_entity_1.VenuePhoto.name, schema: venue_photo_entity_1.VenuePhotoSchema },
                { name: venue_entity_1.Venue.name, schema: venue_entity_1.VenueSchema },
            ]),
        ],
        controllers: [venue_photo_controller_1.VenuePhotoController],
        providers: [venue_photo_service_1.VenuePhotoService],
    })
], VenuePhotoModule);
//# sourceMappingURL=venue_photo.module.js.map