import { HydratedDocument } from "mongoose";
export type TicketStatusDocument = HydratedDocument<TicketStatus>;
export declare class TicketStatus {
    name: string;
}
export declare const TicketStatusSchema: import("mongoose").Schema<TicketStatus, import("mongoose").Model<TicketStatus, any, any, any, import("mongoose").Document<unknown, any, TicketStatus, any> & TicketStatus & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TicketStatus, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<TicketStatus>, {}> & import("mongoose").FlatRecord<TicketStatus> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
