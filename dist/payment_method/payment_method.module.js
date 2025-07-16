"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodModule = void 0;
const common_1 = require("@nestjs/common");
const payment_method_service_1 = require("./payment_method.service");
const payment_method_controller_1 = require("./payment_method.controller");
const mongoose_1 = require("@nestjs/mongoose");
const payment_method_entity_1 = require("./schemas/payment_method.entity");
let PaymentMethodModule = class PaymentMethodModule {
};
exports.PaymentMethodModule = PaymentMethodModule;
exports.PaymentMethodModule = PaymentMethodModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: payment_method_entity_1.PaymentMethod.name,
                    schema: payment_method_entity_1.PaymentMethodSchema,
                },
            ]),
        ],
        controllers: [payment_method_controller_1.PaymentMethodController],
        providers: [payment_method_service_1.PaymentMethodService],
    })
], PaymentMethodModule);
//# sourceMappingURL=payment_method.module.js.map