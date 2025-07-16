"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VenueTypesModule = void 0;
const common_1 = require("@nestjs/common");
const venue_types_service_1 = require("./venue_types.service");
const venue_types_controller_1 = require("./venue_types.controller");
const mongoose_1 = require("@nestjs/mongoose");
const venue_type_entity_1 = require("./schemas/venue_type.entity");
let VenueTypesModule = class VenueTypesModule {
};
exports.VenueTypesModule = VenueTypesModule;
exports.VenueTypesModule = VenueTypesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: venue_type_entity_1.VenueType.name, schema: venue_type_entity_1.VenueTypeSchema },
            ]),
        ],
        controllers: [venue_types_controller_1.VenueTypesController],
        providers: [venue_types_service_1.VenueTypesService],
    })
], VenueTypesModule);
//# sourceMappingURL=venue_types.module.js.map