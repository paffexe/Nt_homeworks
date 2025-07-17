import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Seat } from "../../seat/schemas/seat.entity";
import { TicketStatus } from "../../ticket_status/schemas/ticket_status.entity";
import { Events } from "../../event/entities/event.entity";

@Schema({ timestamps: true })
export class Ticket extends Document {
  @Prop({ required: true, type: Number })
  price: number;

  @Prop({ required: true, type: Number })
  service_fee: number;

  @Prop({ required: true })
  ticket_type: string;

  @Prop({ type: Types.ObjectId, ref: Events.name, required: true })
  event_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: Seat.name, required: true })
  seat_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: TicketStatus.name, required: true })
  status_id: Types.ObjectId;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
