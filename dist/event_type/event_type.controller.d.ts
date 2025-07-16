import { EventTypeService } from "./event_type.service";
import { CreateEventTypeDto } from "./dto/create-event_type.dto";
import { UpdateEventTypeDto } from "./dto/update-event_type.dto";
export declare class EventTypeController {
    private readonly eventTypeService;
    constructor(eventTypeService: EventTypeService);
    create(createEventTypeDto: CreateEventTypeDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/event_type.entity").EventType, {}> & import("./schemas/event_type.entity").EventType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/event_type.entity").EventType, {}> & import("./schemas/event_type.entity").EventType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/event_type.entity").EventType, {}> & import("./schemas/event_type.entity").EventType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/event_type.entity").EventType, {}> & import("./schemas/event_type.entity").EventType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/event_type.entity").EventType, {}> & import("./schemas/event_type.entity").EventType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/event_type.entity").EventType, {}> & import("./schemas/event_type.entity").EventType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/event_type.entity").EventType, {}> & import("./schemas/event_type.entity").EventType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/event_type.entity").EventType, {}> & import("./schemas/event_type.entity").EventType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/event_type.entity").EventType, {}> & import("./schemas/event_type.entity").EventType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/event_type.entity").EventType, {}> & import("./schemas/event_type.entity").EventType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/event_type.entity").EventType, {}> & import("./schemas/event_type.entity").EventType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/event_type.entity").EventType, {}> & import("./schemas/event_type.entity").EventType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "findOne", {}>;
    update(id: string, updateEventTypeDto: UpdateEventTypeDto): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/event_type.entity").EventType, {}> & import("./schemas/event_type.entity").EventType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/event_type.entity").EventType, {}> & import("./schemas/event_type.entity").EventType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/event_type.entity").EventType, {}> & import("./schemas/event_type.entity").EventType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/event_type.entity").EventType, {}> & import("./schemas/event_type.entity").EventType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/event_type.entity").EventType, {}> & import("./schemas/event_type.entity").EventType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "findOneAndUpdate", {}>;
    remove(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/event_type.entity").EventType, {}> & import("./schemas/event_type.entity").EventType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/event_type.entity").EventType, {}> & import("./schemas/event_type.entity").EventType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/event_type.entity").EventType, {}> & import("./schemas/event_type.entity").EventType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/event_type.entity").EventType, {}> & import("./schemas/event_type.entity").EventType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/event_type.entity").EventType, {}> & import("./schemas/event_type.entity").EventType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "findOneAndDelete", {}>;
}
