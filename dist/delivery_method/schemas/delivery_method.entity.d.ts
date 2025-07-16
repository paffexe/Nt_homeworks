import { HydratedDocument } from "mongoose";
export type DeliveryMethodDocument = HydratedDocument<DeliveryMethod>;
export declare class DeliveryMethod {
    name: string;
}
export declare const DeliveryMethodSchema: import("mongoose").Schema<DeliveryMethod, import("mongoose").Model<DeliveryMethod, any, any, any, import("mongoose").Document<unknown, any, DeliveryMethod, any> & DeliveryMethod & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, DeliveryMethod, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<DeliveryMethod>, {}> & import("mongoose").FlatRecord<DeliveryMethod> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
