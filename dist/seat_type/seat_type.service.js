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
exports.SeatTypeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const seat_type_entity_1 = require("./schemas/seat_type.entity");
let SeatTypeService = class SeatTypeService {
    seatTypeSchema;
    constructor(seatTypeSchema) {
        this.seatTypeSchema = seatTypeSchema;
    }
    async create(createSeatTypeDto) {
        return this.seatTypeSchema.create(createSeatTypeDto);
    }
    findAll() {
        return this.seatTypeSchema.find();
    }
    findOne(id) {
        return this.seatTypeSchema.findById(id);
    }
    update(id, updateSeatTypeDto) {
        return this.seatTypeSchema.findByIdAndUpdate(id, updateSeatTypeDto);
    }
    remove(id) {
        return this.seatTypeSchema.findByIdAndDelete(id);
    }
};
exports.SeatTypeService = SeatTypeService;
exports.SeatTypeService = SeatTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(seat_type_entity_1.SeatType.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SeatTypeService);
//# sourceMappingURL=seat_type.service.js.map