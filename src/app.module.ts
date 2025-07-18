import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { PaymentMethodModule } from './payment_method/payment_method.module';
import { DeliveryMethodModule } from './delivery_method/delivery_method.module';
import { SeatTypeModule } from './seat_type/seat_type.module';
import { RegionModule } from './region/region.module';
import { DistrictModule } from './district/district.module';
import { TypesModule } from './types/types.module';
import { VenueTypesModule } from './venue_types/venue_types.module';
import { VenuePhotoModule } from './venue_photo/venue_photo.module';
import { LangModule } from './lang/lang.module';
import { HumanCategoryModule } from './human_category/human_category.module';
import { EventTypeModule } from './event_type/event_type.module';
import { TicketStatusModule } from './ticket_status/ticket_status.module';
import { VenueModule } from './venue/venue.module';
import { CustomerModule } from './customer/customer.module';
import { CustomerAddressModule } from './customer_address/customer_address.module';
import { CustomerCardModule } from './customer_card/customer_card.module';
import { SeatModule } from './seat/seat.module';
import { EventModule } from './event/event.module';
import { TicketModule } from './ticket/ticket.module';
import { BookingModule } from './booking/booking.module';
import { CartModule } from './cart/cart.module';
import { CartItemModule } from './cart_item/cart_item.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI!),
    AdminModule,
    AuthModule,
    PaymentMethodModule,
    DeliveryMethodModule,
    SeatTypeModule,
    RegionModule,
    DistrictModule,
    TypesModule,
    VenueTypesModule,
    VenuePhotoModule,
    LangModule,
    HumanCategoryModule,
    EventTypeModule,
    TicketStatusModule,
    VenueModule,
    CustomerModule,
    CustomerAddressModule,
    CustomerCardModule,
    SeatModule,
    EventModule,
    TicketModule,
    BookingModule,
    CartModule,
    CartItemModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
