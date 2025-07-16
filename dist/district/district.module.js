"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistrictModule = void 0;
const common_1 = require("@nestjs/common");
const district_service_1 = require("./district.service");
const district_controller_1 = require("./district.controller");
const mongoose_1 = require("@nestjs/mongoose");
const district_entity_1 = require("./schemas/district.entity");
const region_entity_1 = require("../region/schemas/region.entity");
let DistrictModule = class DistrictModule {
};
exports.DistrictModule = DistrictModule;
exports.DistrictModule = DistrictModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: district_entity_1.District.name,
                    schema: district_entity_1.DistrictSchema,
                },
                {
                    name: region_entity_1.Region.name,
                    schema: region_entity_1.RegionSchema,
                },
            ]),
        ],
        controllers: [district_controller_1.DistrictController],
        providers: [district_service_1.DistrictService],
    })
], DistrictModule);
//# sourceMappingURL=district.module.js.map