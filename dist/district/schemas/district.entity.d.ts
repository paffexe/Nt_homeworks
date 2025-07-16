import mongoose, { HydratedDocument } from "mongoose";
import { Region } from "../../region/schemas/region.entity";
export type DistrictDocument = HydratedDocument<District>;
export declare class District {
    name: string;
    region_id: Region;
}
export declare const DistrictSchema: mongoose.Schema<District, mongoose.Model<District, any, any, any, mongoose.Document<unknown, any, District, any> & District & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, District, mongoose.Document<unknown, {}, mongoose.FlatRecord<District>, {}> & mongoose.FlatRecord<District> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
