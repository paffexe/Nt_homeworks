import { Module } from "@nestjs/common";

import { MongooseModule } from "@nestjs/mongoose";
import {
  CustomerAddress,
  CustomerAddressSchema,
} from "./schemas/customer_address.entity";
import { CustomerAddressController } from "./customer_address.controller";
import { CustomerAddressService } from "./customer_address.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CustomerAddress.name, schema: CustomerAddressSchema },
    ]),
  ],
  controllers: [CustomerAddressController],
  providers: [CustomerAddressService],
})
export class CustomerAddressModule {}
