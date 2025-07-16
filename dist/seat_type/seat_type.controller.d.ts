import { SeatTypeService } from "./seat_type.service";
import { CreateSeatTypeDto } from "./dto/create-seat_type.dto";
import { UpdateSeatTypeDto } from "./dto/update-seat_type.dto";
export declare class SeatTypeController {
    private readonly seatTypeService;
    constructor(seatTypeService: SeatTypeService);
    create(createSeatTypeDto: CreateSeatTypeDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/seat_type.entity").SeatType, {}> & import("./schemas/seat_type.entity").SeatType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/seat_type.entity").SeatType, {}> & import("./schemas/seat_type.entity").SeatType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/seat_type.entity").SeatType, {}> & import("./schemas/seat_type.entity").SeatType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/seat_type.entity").SeatType, {}> & import("./schemas/seat_type.entity").SeatType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/seat_type.entity").SeatType, {}> & import("./schemas/seat_type.entity").SeatType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/seat_type.entity").SeatType, {}> & import("./schemas/seat_type.entity").SeatType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/seat_type.entity").SeatType, {}> & import("./schemas/seat_type.entity").SeatType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/seat_type.entity").SeatType, {}> & import("./schemas/seat_type.entity").SeatType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/seat_type.entity").SeatType, {}> & import("./schemas/seat_type.entity").SeatType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/seat_type.entity").SeatType, {}> & import("./schemas/seat_type.entity").SeatType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/seat_type.entity").SeatType, {}> & import("./schemas/seat_type.entity").SeatType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/seat_type.entity").SeatType, {}> & import("./schemas/seat_type.entity").SeatType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "findOne", {}>;
    update(id: string, updateSeatTypeDto: UpdateSeatTypeDto): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/seat_type.entity").SeatType, {}> & import("./schemas/seat_type.entity").SeatType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/seat_type.entity").SeatType, {}> & import("./schemas/seat_type.entity").SeatType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/seat_type.entity").SeatType, {}> & import("./schemas/seat_type.entity").SeatType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/seat_type.entity").SeatType, {}> & import("./schemas/seat_type.entity").SeatType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/seat_type.entity").SeatType, {}> & import("./schemas/seat_type.entity").SeatType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "findOneAndUpdate", {}>;
    remove(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/seat_type.entity").SeatType, {}> & import("./schemas/seat_type.entity").SeatType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/seat_type.entity").SeatType, {}> & import("./schemas/seat_type.entity").SeatType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/seat_type.entity").SeatType, {}> & import("./schemas/seat_type.entity").SeatType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/seat_type.entity").SeatType, {}> & import("./schemas/seat_type.entity").SeatType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/seat_type.entity").SeatType, {}> & import("./schemas/seat_type.entity").SeatType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "findOneAndDelete", {}>;
}
