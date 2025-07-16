import { HydratedDocument } from "mongoose";
export type PaymentMethodDocument = HydratedDocument<PaymentMethod>;
export declare class PaymentMethod {
    name: string;
}
export declare const PaymentMethodSchema: import("mongoose").Schema<PaymentMethod, import("mongoose").Model<PaymentMethod, any, any, any, import("mongoose").Document<unknown, any, PaymentMethod, any> & PaymentMethod & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PaymentMethod, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<PaymentMethod>, {}> & import("mongoose").FlatRecord<PaymentMethod> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
