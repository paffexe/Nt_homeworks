import mongoose, { HydratedDocument } from "mongoose";
import { Region } from "../../region/schemas/region.entity";
import { District } from "../../district/schemas/district.entity";
export type VenueDocument = HydratedDocument<Venue>;
export declare class Venue {
    name: string;
    address: string;
    location: string;
    site: string;
    phone: string;
    schema: string;
    regions: Region[];
    districts: District[];
}
export declare const VenueSchema: mongoose.Schema<Venue, mongoose.Model<Venue, any, any, any, mongoose.Document<unknown, any, Venue, any> & Venue & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Venue, mongoose.Document<unknown, {}, mongoose.FlatRecord<Venue>, {}> & mongoose.FlatRecord<Venue> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
