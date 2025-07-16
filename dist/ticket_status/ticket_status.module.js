"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketStatusModule = void 0;
const common_1 = require("@nestjs/common");
const ticket_status_service_1 = require("./ticket_status.service");
const ticket_status_controller_1 = require("./ticket_status.controller");
const mongoose_1 = require("@nestjs/mongoose");
const ticket_status_entity_1 = require("./schemas/ticket_status.entity");
let TicketStatusModule = class TicketStatusModule {
};
exports.TicketStatusModule = TicketStatusModule;
exports.TicketStatusModule = TicketStatusModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: ticket_status_entity_1.TicketStatus.name, schema: ticket_status_entity_1.TicketStatusSchema },
            ]),
        ],
        controllers: [ticket_status_controller_1.TicketStatusController],
        providers: [ticket_status_service_1.TicketStatusService],
    })
], TicketStatusModule);
//# sourceMappingURL=ticket_status.module.js.map