import { VenueTypesService } from './venue_types.service';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
export declare class VenueTypesController {
    private readonly venueTypesService;
    constructor(venueTypesService: VenueTypesService);
    create(createVenueTypeDto: CreateVenueTypeDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/venue_type.entity").VenueType, {}> & import("./schemas/venue_type.entity").VenueType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/venue_type.entity").VenueType, {}> & import("./schemas/venue_type.entity").VenueType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/venue_type.entity").VenueType, {}> & import("./schemas/venue_type.entity").VenueType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/venue_type.entity").VenueType, {}> & import("./schemas/venue_type.entity").VenueType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/venue_type.entity").VenueType, {}> & import("./schemas/venue_type.entity").VenueType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/venue_type.entity").VenueType, {}> & import("./schemas/venue_type.entity").VenueType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/venue_type.entity").VenueType, {}> & import("./schemas/venue_type.entity").VenueType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/venue_type.entity").VenueType, {}> & import("./schemas/venue_type.entity").VenueType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/venue_type.entity").VenueType, {}> & import("./schemas/venue_type.entity").VenueType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/venue_type.entity").VenueType, {}> & import("./schemas/venue_type.entity").VenueType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/venue_type.entity").VenueType, {}> & import("./schemas/venue_type.entity").VenueType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/venue_type.entity").VenueType, {}> & import("./schemas/venue_type.entity").VenueType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "findOne", {}>;
    update(id: string, updateVenueTypeDto: UpdateVenueTypeDto): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/venue_type.entity").VenueType, {}> & import("./schemas/venue_type.entity").VenueType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/venue_type.entity").VenueType, {}> & import("./schemas/venue_type.entity").VenueType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/venue_type.entity").VenueType, {}> & import("./schemas/venue_type.entity").VenueType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/venue_type.entity").VenueType, {}> & import("./schemas/venue_type.entity").VenueType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/venue_type.entity").VenueType, {}> & import("./schemas/venue_type.entity").VenueType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "findOneAndUpdate", {}>;
    remove(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/venue_type.entity").VenueType, {}> & import("./schemas/venue_type.entity").VenueType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/venue_type.entity").VenueType, {}> & import("./schemas/venue_type.entity").VenueType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/venue_type.entity").VenueType, {}> & import("./schemas/venue_type.entity").VenueType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/venue_type.entity").VenueType, {}> & import("./schemas/venue_type.entity").VenueType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/venue_type.entity").VenueType, {}> & import("./schemas/venue_type.entity").VenueType & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "findOneAndDelete", {}>;
}
