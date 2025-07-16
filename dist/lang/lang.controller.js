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
exports.LangController = void 0;
const common_1 = require("@nestjs/common");
const lang_service_1 = require("./lang.service");
const create_lang_dto_1 = require("./dto/create-lang.dto");
const update_lang_dto_1 = require("./dto/update-lang.dto");
let LangController = class LangController {
    langService;
    constructor(langService) {
        this.langService = langService;
    }
    create(createLangDto) {
        return this.langService.create(createLangDto);
    }
    findAll() {
        return this.langService.findAll();
    }
    findOne(id) {
        return this.langService.findOne(id);
    }
    update(id, updateLangDto) {
        return this.langService.update(id, updateLangDto);
    }
    remove(id) {
        return this.langService.remove(id);
    }
};
exports.LangController = LangController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lang_dto_1.CreateLangDto]),
    __metadata("design:returntype", void 0)
], LangController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LangController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LangController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_lang_dto_1.UpdateLangDto]),
    __metadata("design:returntype", void 0)
], LangController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LangController.prototype, "remove", null);
exports.LangController = LangController = __decorate([
    (0, common_1.Controller)("lang"),
    __metadata("design:paramtypes", [lang_service_1.LangService])
], LangController);
//# sourceMappingURL=lang.controller.js.map