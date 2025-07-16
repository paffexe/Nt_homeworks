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
exports.EventTypeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const event_type_entity_1 = require("./schemas/event_type.entity");
let EventTypeService = class EventTypeService {
    eventTypeSchema;
    constructor(eventTypeSchema) {
        this.eventTypeSchema = eventTypeSchema;
    }
    async create(createEventTypeDto) {
        return this.eventTypeSchema.create(createEventTypeDto);
    }
    findAll() {
        return this.eventTypeSchema.find();
    }
    findOne(id) {
        return this.eventTypeSchema.findById(id);
    }
    update(id, updateEventTypeDto) {
        return this.eventTypeSchema.findByIdAndUpdate(id, updateEventTypeDto);
    }
    remove(id) {
        return this.eventTypeSchema.findByIdAndDelete(id);
    }
};
exports.EventTypeService = EventTypeService;
exports.EventTypeService = EventTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(event_type_entity_1.EventType.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EventTypeService);
//# sourceMappingURL=event_type.service.js.map