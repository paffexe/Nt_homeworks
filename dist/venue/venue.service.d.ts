import { CreateVenueDto } from "./dto/create-venue.dto";
import { UpdateVenueDto } from "./dto/update-venue.dto";
import { Venue } from "./schemas/venue.entity";
import { Model } from "mongoose";
import { Region } from "../region/schemas/region.entity";
import { District } from "../district/schemas/district.entity";
import { VenuePhoto } from "../venue_photo/schemas/venue_photo.entity";
export declare class VenueService {
    private readonly venueSchema;
    private readonly regionSchema;
    private readonly districtSchema;
    private readonly photoSchema;
    constructor(venueSchema: Model<Venue>, regionSchema: Model<Region>, districtSchema: Model<District>, photoSchema: Model<VenuePhoto>);
    create(createVenueDto: CreateVenueDto): Promise<import("mongoose").Document<unknown, {}, Venue, {}> & Venue & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Venue, {}> & Venue & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, Venue, {}> & Venue & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, Venue, "find", {}>;
    findOne(id: string): string;
    update(id: string, updateVenueDto: UpdateVenueDto): string;
    remove(id: string): string;
}
