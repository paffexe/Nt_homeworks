import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Venue } from "../../venue/schemas/venue.entity";

export type VenuePhotoDocument = HydratedDocument<VenuePhoto>;

@Schema({ versionKey: false, timestamps: false })
export class VenuePhoto {
  @Prop()
  img_url: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Venue" })
  venue_id: string;
}

export const VenuePhotoSchema = SchemaFactory.createForClass(VenuePhoto);
