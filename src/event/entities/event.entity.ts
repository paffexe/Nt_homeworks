import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { EventType } from "../../event_type/schemas/event_type.entity";
import { HumanCategory } from "../../human_category/schemas/human_category.entity";
import { Venue } from "../../venue/schemas/venue.entity";
import { Lang } from "../../lang/schemas/lang.entity";

@Schema({ timestamps: true })
export class Events extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  photo: string;

  @Prop({ required: true })
  start_date: Date;

  @Prop({ required: true })
  start_time: string;

  @Prop({ required: true })
  finish_date: Date;

  @Prop({ required: true })
  finish_time: string;

  @Prop()
  info: string;

  @Prop({ required: true })
  release_date: Date;

  @Prop({ type: Types.ObjectId, ref: EventType.name, required: true })
  event_type_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: HumanCategory.name, required: true })
  human_category_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: Venue.name, required: true })
  venue_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: Lang.name, required: true })
  lang_id: Types.ObjectId;
}

export const EventSchema = SchemaFactory.createForClass(Events);
