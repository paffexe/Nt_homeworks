import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { PaymentMethod } from "../../payment_method/schemas/payment_method.entity";
import { DeliveryMethod } from "../../delivery_method/schemas/delivery_method.entity";
import { Cart } from "../../cart/entities/cart.entity";

@Schema({ timestamps: true })
export class Booking extends Document {
  @Prop({ default: Date.now })
  created_at: Date;

  @Prop()
  finished_at?: Date;

  @Prop({ type: [{ type: Types.ObjectId, ref: Cart.name }], required: true })
  cart_id: Types.ObjectId[];

  @Prop({ type: Types.ObjectId, ref: PaymentMethod.name, required: true })
  payment_method_id: Types.ObjectId[];

  @Prop({ type: Types.ObjectId, ref: DeliveryMethod.name, required: true })
  delivery_method_id: Types.ObjectId[];
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
