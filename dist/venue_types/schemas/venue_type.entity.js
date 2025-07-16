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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VenueTypeSchema = exports.VenueType = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let VenueType = class VenueType {
    typeId;
    venueId;
};
exports.VenueType = VenueType;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
        ref: "Type",
    }),
    __metadata("design:type", Array)
], VenueType.prototype, "typeId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: "Venue" }),
    __metadata("design:type", Array)
], VenueType.prototype, "venueId", void 0);
exports.VenueType = VenueType = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: false })
], VenueType);
exports.VenueTypeSchema = mongoose_1.SchemaFactory.createForClass(VenueType);
//# sourceMappingURL=venue_type.entity.js.map