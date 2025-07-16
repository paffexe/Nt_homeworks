"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVenueTypeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_venue_type_dto_1 = require("./create-venue_type.dto");
class UpdateVenueTypeDto extends (0, swagger_1.PartialType)(create_venue_type_dto_1.CreateVenueTypeDto) {
}
exports.UpdateVenueTypeDto = UpdateVenueTypeDto;
//# sourceMappingURL=update-venue_type.dto.js.map