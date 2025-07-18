import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Customer } from "../../customer/schemas/customer.entity";

@Schema({ timestamps: true })
export class Cart extends Document {
  @Prop({ default: Date.now })
  created_at: Date;

  @Prop()
  finished_at?: Date;

  @Prop({
    type: Types.ObjectId,
    ref: Customer.name,
    required: true,
    unique: true,
  })
  customer_id: Types.ObjectId;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
