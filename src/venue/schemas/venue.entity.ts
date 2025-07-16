import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Region } from "../../region/schemas/region.entity";
import { District } from "../../district/schemas/district.entity";
import { Type } from "../../types/schemas/type.entity";
import { VenuePhoto } from "../../venue_photo/schemas/venue_photo.entity";

export type VenueDocument = HydratedDocument<Venue>;

@Schema({ versionKey: false, timestamps: false })
export class Venue {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  location: string;

  @Prop()
  site: string;

  @Prop()
  phone: string;

  @Prop()
  schema: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "Region",
  })
  regions: Region[];

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "District",
  })
  districts: District[];

  // @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: "VenueType" }] })
  // types: Type[];
}

export const VenueSchema = SchemaFactory.createForClass(Venue);
