"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const admin_module_1 = require("./admin/admin.module");
const auth_module_1 = require("./auth/auth.module");
const payment_method_module_1 = require("./payment_method/payment_method.module");
const delivery_method_module_1 = require("./delivery_method/delivery_method.module");
const seat_type_module_1 = require("./seat_type/seat_type.module");
const region_module_1 = require("./region/region.module");
const district_module_1 = require("./district/district.module");
const types_module_1 = require("./types/types.module");
const venue_types_module_1 = require("./venue_types/venue_types.module");
const venue_photo_module_1 = require("./venue_photo/venue_photo.module");
const lang_module_1 = require("./lang/lang.module");
const human_category_module_1 = require("./human_category/human_category.module");
const event_type_module_1 = require("./event_type/event_type.module");
const ticket_status_module_1 = require("./ticket_status/ticket_status.module");
const venue_module_1 = require("./venue/venue.module");
const customer_module_1 = require("./customer/customer.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
            mongoose_1.MongooseModule.forRoot(process.env.MONGO_URI),
            admin_module_1.AdminModule,
            auth_module_1.AuthModule,
            payment_method_module_1.PaymentMethodModule,
            delivery_method_module_1.DeliveryMethodModule,
            seat_type_module_1.SeatTypeModule,
            region_module_1.RegionModule,
            district_module_1.DistrictModule,
            types_module_1.TypesModule,
            venue_types_module_1.VenueTypesModule,
            venue_photo_module_1.VenuePhotoModule,
            lang_module_1.LangModule,
            human_category_module_1.HumanCategoryModule,
            event_type_module_1.EventTypeModule,
            ticket_status_module_1.TicketStatusModule,
            venue_module_1.VenueModule,
            customer_module_1.CustomerModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map