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
exports.HumanCategorySchema = exports.HumanCategory = exports.Gender = void 0;
const mongoose_1 = require("@nestjs/mongoose");
var Gender;
(function (Gender) {
    Gender["MALE"] = "male";
    Gender["FEMALE"] = "female";
})(Gender || (exports.Gender = Gender = {}));
let HumanCategory = class HumanCategory {
    name;
    start_age;
    finish_age;
    gender;
};
exports.HumanCategory = HumanCategory;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], HumanCategory.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], HumanCategory.prototype, "start_age", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], HumanCategory.prototype, "finish_age", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: Gender }),
    __metadata("design:type", String)
], HumanCategory.prototype, "gender", void 0);
exports.HumanCategory = HumanCategory = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: false })
], HumanCategory);
exports.HumanCategorySchema = mongoose_1.SchemaFactory.createForClass(HumanCategory);
//# sourceMappingURL=human_category.entity.js.map