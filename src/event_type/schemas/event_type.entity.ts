import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type EventTypeDocument = HydratedDocument<EventType>;

@Schema({ versionKey: false, timestamps: false })
export class EventType {
  @Prop()
  name: string;

  @Prop({ type: Types.ObjectId, ref: "EventType", default: null })
  parent_event_type_id: Types.ObjectId | null;
}

export const EventTypeSchema = SchemaFactory.createForClass(EventType);
