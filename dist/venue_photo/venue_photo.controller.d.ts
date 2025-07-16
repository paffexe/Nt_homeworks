import { VenuePhotoService } from "./venue_photo.service";
import { CreateVenuePhotoDto } from "./dto/create-venue_photo.dto";
import { UpdateVenuePhotoDto } from "./dto/update-venue_photo.dto";
export declare class VenuePhotoController {
    private readonly venuePhotoService;
    constructor(venuePhotoService: VenuePhotoService);
    create(createVenuePhotoDto: CreateVenuePhotoDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/venue_photo.entity").VenuePhoto, {}> & import("./schemas/venue_photo.entity").VenuePhoto & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/venue_photo.entity").VenuePhoto, {}> & import("./schemas/venue_photo.entity").VenuePhoto & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/venue_photo.entity").VenuePhoto, {}> & import("./schemas/venue_photo.entity").VenuePhoto & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/venue_photo.entity").VenuePhoto, {}> & import("./schemas/venue_photo.entity").VenuePhoto & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/venue_photo.entity").VenuePhoto, {}> & import("./schemas/venue_photo.entity").VenuePhoto & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/venue_photo.entity").VenuePhoto, {}> & import("./schemas/venue_photo.entity").VenuePhoto & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/venue_photo.entity").VenuePhoto, {}> & import("./schemas/venue_photo.entity").VenuePhoto & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/venue_photo.entity").VenuePhoto, {}> & import("./schemas/venue_photo.entity").VenuePhoto & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/venue_photo.entity").VenuePhoto, {}> & import("./schemas/venue_photo.entity").VenuePhoto & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/venue_photo.entity").VenuePhoto, {}> & import("./schemas/venue_photo.entity").VenuePhoto & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/venue_photo.entity").VenuePhoto, {}> & import("./schemas/venue_photo.entity").VenuePhoto & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/venue_photo.entity").VenuePhoto, {}> & import("./schemas/venue_photo.entity").VenuePhoto & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "findOne", {}>;
    update(id: string, updateVenuePhotoDto: UpdateVenuePhotoDto): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/venue_photo.entity").VenuePhoto, {}> & import("./schemas/venue_photo.entity").VenuePhoto & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/venue_photo.entity").VenuePhoto, {}> & import("./schemas/venue_photo.entity").VenuePhoto & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/venue_photo.entity").VenuePhoto, {}> & import("./schemas/venue_photo.entity").VenuePhoto & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/venue_photo.entity").VenuePhoto, {}> & import("./schemas/venue_photo.entity").VenuePhoto & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/venue_photo.entity").VenuePhoto, {}> & import("./schemas/venue_photo.entity").VenuePhoto & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "findOneAndUpdate", {}>;
    remove(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/venue_photo.entity").VenuePhoto, {}> & import("./schemas/venue_photo.entity").VenuePhoto & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/venue_photo.entity").VenuePhoto, {}> & import("./schemas/venue_photo.entity").VenuePhoto & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/venue_photo.entity").VenuePhoto, {}> & import("./schemas/venue_photo.entity").VenuePhoto & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/venue_photo.entity").VenuePhoto, {}> & import("./schemas/venue_photo.entity").VenuePhoto & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/venue_photo.entity").VenuePhoto, {}> & import("./schemas/venue_photo.entity").VenuePhoto & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "findOneAndDelete", {}>;
}
