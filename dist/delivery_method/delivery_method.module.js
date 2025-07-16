"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryMethodModule = void 0;
const common_1 = require("@nestjs/common");
const delivery_method_service_1 = require("./delivery_method.service");
const delivery_method_controller_1 = require("./delivery_method.controller");
const mongoose_1 = require("@nestjs/mongoose");
const delivery_method_entity_1 = require("./schemas/delivery_method.entity");
let DeliveryMethodModule = class DeliveryMethodModule {
};
exports.DeliveryMethodModule = DeliveryMethodModule;
exports.DeliveryMethodModule = DeliveryMethodModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: delivery_method_entity_1.DeliveryMethod.name,
                    schema: delivery_method_entity_1.DeliveryMethodSchema,
                },
            ]),
        ],
        controllers: [delivery_method_controller_1.DeliveryMethodController],
        providers: [delivery_method_service_1.DeliveryMethodService],
    })
], DeliveryMethodModule);
//# sourceMappingURL=delivery_method.module.js.map