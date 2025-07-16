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
exports.EventTypeSchema = exports.EventType = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let EventType = class EventType {
    name;
    parent_event_type_id;
};
exports.EventType = EventType;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], EventType.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: "EventType", default: null }),
    __metadata("design:type", Object)
], EventType.prototype, "parent_event_type_id", void 0);
exports.EventType = EventType = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: false })
], EventType);
exports.EventTypeSchema = mongoose_1.SchemaFactory.createForClass(EventType);
//# sourceMappingURL=event_type.entity.js.map