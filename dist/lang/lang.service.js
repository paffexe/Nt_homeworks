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
exports.LangService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const lang_entity_1 = require("./schemas/lang.entity");
let LangService = class LangService {
    langSchema;
    constructor(langSchema) {
        this.langSchema = langSchema;
    }
    async create(createLangDto) {
        return this.langSchema.create(createLangDto);
    }
    findAll() {
        return this.langSchema.find();
    }
    findOne(id) {
        return this.langSchema.findById(id);
    }
    update(id, updateLangDto) {
        return this.langSchema.findByIdAndUpdate(id, updateLangDto);
    }
    remove(id) {
        return this.langSchema.findByIdAndDelete(id);
    }
};
exports.LangService = LangService;
exports.LangService = LangService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(lang_entity_1.Lang.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LangService);
//# sourceMappingURL=lang.service.js.map