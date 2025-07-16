import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Types } from "mongoose";
import { Type } from "../../types/schemas/type.entity";
import { Venue } from "../../venue/schemas/venue.entity";

export type VenueTypeDocument = HydratedDocument<VenueType>;

@Schema({ versionKey: false, timestamps: false })
export class VenueType {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "Type",
  })
  typeId: Type[];

  @Prop({ type: Types.ObjectId, ref: "Venue" })
  venueId: Venue[];
}

export const VenueTypeSchema = SchemaFactory.createForClass(VenueType);
