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
exports.DeliveryMethodController = void 0;
const common_1 = require("@nestjs/common");
const delivery_method_service_1 = require("./delivery_method.service");
const create_delivery_method_dto_1 = require("./dto/create-delivery_method.dto");
const update_delivery_method_dto_1 = require("./dto/update-delivery_method.dto");
let DeliveryMethodController = class DeliveryMethodController {
    deliveryMethodService;
    constructor(deliveryMethodService) {
        this.deliveryMethodService = deliveryMethodService;
    }
    create(createDeliveryMethodDto) {
        return this.deliveryMethodService.create(createDeliveryMethodDto);
    }
    findAll() {
        return this.deliveryMethodService.findAll();
    }
    findOne(id) {
        return this.deliveryMethodService.findOne(id);
    }
    update(id, updateDeliveryMethodDto) {
        return this.deliveryMethodService.update(id, updateDeliveryMethodDto);
    }
    remove(id) {
        return this.deliveryMethodService.remove(id);
    }
};
exports.DeliveryMethodController = DeliveryMethodController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_delivery_method_dto_1.CreateDeliveryMethodDto]),
    __metadata("design:returntype", void 0)
], DeliveryMethodController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeliveryMethodController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeliveryMethodController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_delivery_method_dto_1.UpdateDeliveryMethodDto]),
    __metadata("design:returntype", void 0)
], DeliveryMethodController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeliveryMethodController.prototype, "remove", null);
exports.DeliveryMethodController = DeliveryMethodController = __decorate([
    (0, common_1.Controller)("delivery-method"),
    __metadata("design:paramtypes", [delivery_method_service_1.DeliveryMethodService])
], DeliveryMethodController);
//# sourceMappingURL=delivery_method.controller.js.map