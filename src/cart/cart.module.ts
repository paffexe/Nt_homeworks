import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CartService } from "./cart.service";
import { CartController } from "./cart.controller";
import { Customer, CustomerSchema } from "../customer/schemas/customer.entity";
import { Cart, CartSchema } from "./entities/cart.entity";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Cart.name, schema: CartSchema },
      { name: Customer.name, schema: CustomerSchema },
    ]),
  ],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
