import mongoose, { HydratedDocument } from "mongoose";
export type TypeDocument = HydratedDocument<Type>;
export declare class Type {
    name: string;
}
export declare const TypeSchema: mongoose.Schema<Type, mongoose.Model<Type, any, any, any, mongoose.Document<unknown, any, Type, any> & Type & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Type, mongoose.Document<unknown, {}, mongoose.FlatRecord<Type>, {}> & mongoose.FlatRecord<Type> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
