import { HydratedDocument } from "mongoose";
export type SeatTypeDocument = HydratedDocument<SeatType>;
export declare class SeatType {
    name: string;
}
export declare const SeatTypeSchema: import("mongoose").Schema<SeatType, import("mongoose").Model<SeatType, any, any, any, import("mongoose").Document<unknown, any, SeatType, any> & SeatType & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SeatType, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<SeatType>, {}> & import("mongoose").FlatRecord<SeatType> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
