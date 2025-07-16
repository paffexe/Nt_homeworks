import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type TypeDocument = HydratedDocument<Type>;

@Schema({ versionKey: false, timestamps: false })
export class Type {
  @Prop()
  name: string;
}

export const TypeSchema = SchemaFactory.createForClass(Type);
