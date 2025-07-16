import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MongooseSchema } from "mongoose";
import { Venue } from "../../venue/schemas/venue.entity";
import { SeatType } from "../../seat_type/schemas/seat_type.entity";

export type SeatDocument = HydratedDocument<Seat>;

@Schema({ versionKey: false, timestamps: true })
export class Seat {
  @Prop()
  sector: number;

  @Prop()
  row_number: number;

  @Prop()
  number: number;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: "Venue",
    required: true,
  })
  venue_id: Venue;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: "SeatType",
    required: true,
  })
  seat_type_id: SeatType;

  @Prop()
  location_in_schema: string;
}

export const SeatSchema = SchemaFactory.createForClass(Seat);
