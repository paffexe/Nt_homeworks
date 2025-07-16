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
exports.TicketStatusService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const ticket_status_entity_1 = require("./schemas/ticket_status.entity");
let TicketStatusService = class TicketStatusService {
    ticketStatusSchema;
    constructor(ticketStatusSchema) {
        this.ticketStatusSchema = ticketStatusSchema;
    }
    async create(createTicketStatusDto) {
        return this.ticketStatusSchema.create(createTicketStatusDto);
    }
    findAll() {
        return this.ticketStatusSchema.find();
    }
    findOne(id) {
        return this.ticketStatusSchema.findById(id);
    }
    update(id, updateTicketStatusDto) {
        return this.ticketStatusSchema.findByIdAndUpdate(id, updateTicketStatusDto);
    }
    remove(id) {
        return this.ticketStatusSchema.findByIdAndDelete(id);
    }
};
exports.TicketStatusService = TicketStatusService;
exports.TicketStatusService = TicketStatusService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(ticket_status_entity_1.TicketStatus.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TicketStatusService);
//# sourceMappingURL=ticket_status.service.js.map