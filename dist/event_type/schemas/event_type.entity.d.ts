import { HydratedDocument, Types } from "mongoose";
export type EventTypeDocument = HydratedDocument<EventType>;
export declare class EventType {
    name: string;
    parent_event_type_id: Types.ObjectId | null;
}
export declare const EventTypeSchema: import("mongoose").Schema<EventType, import("mongoose").Model<EventType, any, any, any, import("mongoose").Document<unknown, any, EventType, any> & EventType & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, EventType, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<EventType>, {}> & import("mongoose").FlatRecord<EventType> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
