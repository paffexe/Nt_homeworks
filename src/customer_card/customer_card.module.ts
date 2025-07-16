import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import {
  CustomerCard,
  CustomerCardSchema,
} from "./entities/customer_card.entity";
import { Customer, CustomerSchema } from "../customer/schemas/customer.entity";
import { CustomerCardService } from "./customer_card.service";
import { CustomerCardController } from "./customer_card.controller";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CustomerCard.name,
        schema: CustomerCardSchema,
      },
      {
        name: Customer.name,
        schema: CustomerSchema,
      },
    ]),
  ],
  controllers: [CustomerCardController],
  providers: [CustomerCardService],
})
export class CustomerCardModule {}
