import mongoose, { HydratedDocument } from "mongoose";
export type VenuePhotoDocument = HydratedDocument<VenuePhoto>;
export declare class VenuePhoto {
    img_url: string;
    venue_id: string;
}
export declare const VenuePhotoSchema: mongoose.Schema<VenuePhoto, mongoose.Model<VenuePhoto, any, any, any, mongoose.Document<unknown, any, VenuePhoto, any> & VenuePhoto & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, VenuePhoto, mongoose.Document<unknown, {}, mongoose.FlatRecord<VenuePhoto>, {}> & mongoose.FlatRecord<VenuePhoto> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
