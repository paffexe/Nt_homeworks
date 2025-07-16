import { Module } from "@nestjs/common";
import { SeatService } from "./seat.service";
import { SeatController } from "./seat.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Seat, SeatSchema } from "./schemas/seat.entity";
import { Venue, VenueSchema } from "../venue/schemas/venue.entity";
import {
  SeatType,
  SeatTypeSchema,
} from "../seat_type/schemas/seat_type.entity";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Seat.name,
        schema: SeatSchema,
      },
      {
        name: Venue.name,
        schema: VenueSchema,
      },
      {
        name: SeatType.name,
        schema: SeatTypeSchema,
      },
    ]),
  ],
  controllers: [SeatController],
  providers: [SeatService],
})
export class SeatModule {}
