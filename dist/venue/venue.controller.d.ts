import { VenueService } from "./venue.service";
import { CreateVenueDto } from "./dto/create-venue.dto";
import { UpdateVenueDto } from "./dto/update-venue.dto";
export declare class VenueController {
    private readonly venueService;
    constructor(venueService: VenueService);
    create(createVenueDto: CreateVenueDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/venue.entity").Venue, {}> & import("./schemas/venue.entity").Venue & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schemas/venue.entity").Venue, {}> & import("./schemas/venue.entity").Venue & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, import("./schemas/venue.entity").Venue, {}> & import("./schemas/venue.entity").Venue & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schemas/venue.entity").Venue, "find", {}>;
    findOne(id: string): string;
    update(id: string, updateVenueDto: UpdateVenueDto): string;
    remove(id: string): string;
}
