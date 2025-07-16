import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CustomerDocument = HydratedDocument<Customer>;

@Schema({ versionKey: false, timestamps: false })
export class Customer {
  @Prop({ required: true })
  first_name: string;

  @Prop({ required: true })
  last_name: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, type: Date })
  birth_date: Date;

  @Prop({ required: true, enum: ["male", "female"] })
  gender: "male" | "female";

  @Prop()
  refresh_token: string;

  @Prop({ default: false })
  is_active: boolean;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
