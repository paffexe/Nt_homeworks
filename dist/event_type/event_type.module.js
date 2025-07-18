"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTypeModule = void 0;
const common_1 = require("@nestjs/common");
const event_type_service_1 = require("./event_type.service");
const event_type_controller_1 = require("./event_type.controller");
const mongoose_1 = require("@nestjs/mongoose");
const event_type_entity_1 = require("./schemas/event_type.entity");
let EventTypeModule = class EventTypeModule {
};
exports.EventTypeModule = EventTypeModule;
exports.EventTypeModule = EventTypeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: event_type_entity_1.EventType.name, schema: event_type_entity_1.EventTypeSchema },
            ]),
        ],
        controllers: [event_type_controller_1.EventTypeController],
        providers: [event_type_service_1.EventTypeService],
    })
], EventTypeModule);
//# sourceMappingURL=event_type.module.js.map