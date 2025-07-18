import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BookingService } from "./booking.service";
import { BookingController } from "./booking.controller";
import {
  PaymentMethod,
  PaymentMethodSchema,
} from "../payment_method/schemas/payment_method.entity";
import {
  DeliveryMethod,
  DeliveryMethodSchema,
} from "../delivery_method/schemas/delivery_method.entity";
import { Booking, BookingSchema } from "./entities/booking.entity";
import { Cart, CartSchema } from "../cart/entities/cart.entity";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Booking.name, schema: BookingSchema },
      { name: Cart.name, schema: CartSchema },
      { name: PaymentMethod.name, schema: PaymentMethodSchema },
      { name: DeliveryMethod.name, schema: DeliveryMethodSchema },
    ]),
  ],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
