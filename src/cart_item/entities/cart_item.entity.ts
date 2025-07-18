import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Cart } from "../../cart/entities/cart.entity";
import { Ticket } from "../../ticket/entities/ticket.entity";

@Schema()
export class CartItem extends Document {
  @Prop({ type: Types.ObjectId, ref: Cart.name, required: true })
  cart_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: Ticket.name, required: true })
  ticket_id: Types.ObjectId;
}

export const CartItemSchema = SchemaFactory.createForClass(CartItem);
