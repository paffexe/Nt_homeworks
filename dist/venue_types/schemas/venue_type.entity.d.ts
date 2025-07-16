import mongoose, { HydratedDocument, Types } from "mongoose";
import { Type } from "../../types/schemas/type.entity";
import { Venue } from "../../venue/schemas/venue.entity";
export type VenueTypeDocument = HydratedDocument<VenueType>;
export declare class VenueType {
    typeId: Type[];
    venueId: Venue[];
}
export declare const VenueTypeSchema: mongoose.Schema<VenueType, mongoose.Model<VenueType, any, any, any, mongoose.Document<unknown, any, VenueType, any> & VenueType & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, VenueType, mongoose.Document<unknown, {}, mongoose.FlatRecord<VenueType>, {}> & mongoose.FlatRecord<VenueType> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
