"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLangDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_lang_dto_1 = require("./create-lang.dto");
class UpdateLangDto extends (0, swagger_1.PartialType)(create_lang_dto_1.CreateLangDto) {
}
exports.UpdateLangDto = UpdateLangDto;
//# sourceMappingURL=update-lang.dto.js.map