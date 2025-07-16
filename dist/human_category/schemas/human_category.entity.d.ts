import { HydratedDocument } from "mongoose";
export type HumanCategoryDocument = HydratedDocument<HumanCategory>;
export declare enum Gender {
    MALE = "male",
    FEMALE = "female"
}
export declare class HumanCategory {
    name: string;
    start_age: number;
    finish_age: number;
    gender: Gender;
}
export declare const HumanCategorySchema: import("mongoose").Schema<HumanCategory, import("mongoose").Model<HumanCategory, any, any, any, import("mongoose").Document<unknown, any, HumanCategory, any> & HumanCategory & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, HumanCategory, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<HumanCategory>, {}> & import("mongoose").FlatRecord<HumanCategory> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
