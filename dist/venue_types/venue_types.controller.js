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
exports.VenueTypesController = void 0;
const common_1 = require("@nestjs/common");
const venue_types_service_1 = require("./venue_types.service");
const create_venue_type_dto_1 = require("./dto/create-venue_type.dto");
const update_venue_type_dto_1 = require("./dto/update-venue_type.dto");
let VenueTypesController = class VenueTypesController {
    venueTypesService;
    constructor(venueTypesService) {
        this.venueTypesService = venueTypesService;
    }
    create(createVenueTypeDto) {
        return this.venueTypesService.create(createVenueTypeDto);
    }
    findAll() {
        return this.venueTypesService.findAll();
    }
    findOne(id) {
        return this.venueTypesService.findOne(id);
    }
    update(id, updateVenueTypeDto) {
        return this.venueTypesService.update(id, updateVenueTypeDto);
    }
    remove(id) {
        return this.venueTypesService.remove(id);
    }
};
exports.VenueTypesController = VenueTypesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_venue_type_dto_1.CreateVenueTypeDto]),
    __metadata("design:returntype", void 0)
], VenueTypesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VenueTypesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VenueTypesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_venue_type_dto_1.UpdateVenueTypeDto]),
    __metadata("design:returntype", void 0)
], VenueTypesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VenueTypesController.prototype, "remove", null);
exports.VenueTypesController = VenueTypesController = __decorate([
    (0, common_1.Controller)('venue-types'),
    __metadata("design:paramtypes", [venue_types_service_1.VenueTypesService])
], VenueTypesController);
//# sourceMappingURL=venue_types.controller.js.map