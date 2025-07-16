import { TicketStatusService } from "./ticket_status.service";
import { CreateTicketStatusDto } from "./dto/create-ticket_status.dto";
import { UpdateTicketStatusDto } from "./dto/update-ticket_status.dto";
export declare class TicketStatusController {
    private readonly ticketStatusService;
    constructor(ticketStatusService: TicketStatusService);
    create(createTicketStatusDto: CreateTicketStatusDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/ticket_status.entity").TicketStatus, {}> & import("./schemas/ticket_status.entity").TicketStatus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/ticket_status.entity").TicketStatus, {}> & import("./schemas/ticket_status.entity").TicketStatus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/ticket_status.entity").TicketStatus, {}> & import("./schemas/ticket_status.entity").TicketStatus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/ticket_status.entity").TicketStatus, {}> & import("./schemas/ticket_status.entity").TicketStatus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/ticket_status.entity").TicketStatus, {}> & import("./schemas/ticket_status.entity").TicketStatus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/ticket_status.entity").TicketStatus, {}> & import("./schemas/ticket_status.entity").TicketStatus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/ticket_status.entity").TicketStatus, {}> & import("./schemas/ticket_status.entity").TicketStatus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/ticket_status.entity").TicketStatus, {}> & import("./schemas/ticket_status.entity").TicketStatus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/ticket_status.entity").TicketStatus, {}> & import("./schemas/ticket_status.entity").TicketStatus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/ticket_status.entity").TicketStatus, {}> & import("./schemas/ticket_status.entity").TicketStatus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/ticket_status.entity").TicketStatus, {}> & import("./schemas/ticket_status.entity").TicketStatus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/ticket_status.entity").TicketStatus, {}> & import("./schemas/ticket_status.entity").TicketStatus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "findOne", {}>;
    update(id: string, updateTicketStatusDto: UpdateTicketStatusDto): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/ticket_status.entity").TicketStatus, {}> & import("./schemas/ticket_status.entity").TicketStatus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/ticket_status.entity").TicketStatus, {}> & import("./schemas/ticket_status.entity").TicketStatus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/ticket_status.entity").TicketStatus, {}> & import("./schemas/ticket_status.entity").TicketStatus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/ticket_status.entity").TicketStatus, {}> & import("./schemas/ticket_status.entity").TicketStatus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/ticket_status.entity").TicketStatus, {}> & import("./schemas/ticket_status.entity").TicketStatus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "findOneAndUpdate", {}>;
    remove(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/ticket_status.entity").TicketStatus, {}> & import("./schemas/ticket_status.entity").TicketStatus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/ticket_status.entity").TicketStatus, {}> & import("./schemas/ticket_status.entity").TicketStatus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/ticket_status.entity").TicketStatus, {}> & import("./schemas/ticket_status.entity").TicketStatus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/ticket_status.entity").TicketStatus, {}> & import("./schemas/ticket_status.entity").TicketStatus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/ticket_status.entity").TicketStatus, {}> & import("./schemas/ticket_status.entity").TicketStatus & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "findOneAndDelete", {}>;
}
