import { HydratedDocument } from "mongoose";
export type AdminDocument = HydratedDocument<Admin>;
export declare class Admin {
    full_name: string;
    email: string;
    phone_number: string;
    password: string;
    refresh_token: string;
    is_active: boolean;
    is_creator: boolean;
}
export declare const AdminSchema: import("mongoose").Schema<Admin, import("mongoose").Model<Admin, any, any, any, import("mongoose").Document<unknown, any, Admin, any> & Admin & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Admin, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Admin>, {}> & import("mongoose").FlatRecord<Admin> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
