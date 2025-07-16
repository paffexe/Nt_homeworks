import { HydratedDocument } from "mongoose";
export type CustomerDocument = HydratedDocument<Customer>;
export declare class Customer {
    first_name: string;
    last_name: string;
    phone: string;
    password: string;
    email: string;
    birth_date: Date;
    gender: "male" | "female";
    refresh_token: string;
    is_active: boolean;
}
export declare const CustomerSchema: import("mongoose").Schema<Customer, import("mongoose").Model<Customer, any, any, any, import("mongoose").Document<unknown, any, Customer, any> & Customer & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Customer, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Customer>, {}> & import("mongoose").FlatRecord<Customer> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
