import { HydratedDocument } from "mongoose";
export type LangDocument = HydratedDocument<Lang>;
export declare class Lang {
    name: string;
}
export declare const LangSchema: import("mongoose").Schema<Lang, import("mongoose").Model<Lang, any, any, any, import("mongoose").Document<unknown, any, Lang, any> & Lang & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Lang, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Lang>, {}> & import("mongoose").FlatRecord<Lang> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
