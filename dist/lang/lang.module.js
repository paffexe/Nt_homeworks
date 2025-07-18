"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LangModule = void 0;
const common_1 = require("@nestjs/common");
const lang_service_1 = require("./lang.service");
const lang_controller_1 = require("./lang.controller");
const mongoose_1 = require("@nestjs/mongoose");
const lang_entity_1 = require("./schemas/lang.entity");
let LangModule = class LangModule {
};
exports.LangModule = LangModule;
exports.LangModule = LangModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: lang_entity_1.Lang.name, schema: lang_entity_1.LangSchema }])],
        controllers: [lang_controller_1.LangController],
        providers: [lang_service_1.LangService],
    })
], LangModule);
//# sourceMappingURL=lang.module.js.map