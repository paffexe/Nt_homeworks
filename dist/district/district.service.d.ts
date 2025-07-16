import { Model } from "mongoose";
import { CreateDistrictDto } from "./dto/create-district.dto";
import { UpdateDistrictDto } from "./dto/update-district.dto";
import { District } from "./schemas/district.entity";
import { Region } from "../region/schemas/region.entity";
export declare class DistrictService {
    private readonly districtSchema;
    private readonly regionSchema;
    constructor(districtSchema: Model<District>, regionSchema: Model<Region>);
    create(createDistrictDto: CreateDistrictDto): Promise<import("mongoose").Document<unknown, {}, District, {}> & District & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, District, {}> & District & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, District, {}> & District & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, District, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, District, {}> & District & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, District, {}> & District & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, District, "findOne", {}>;
    update(id: string, updateDistrictDto: UpdateDistrictDto): import("mongoose").Query<(import("mongoose").Document<unknown, {}, District, {}> & District & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, District, {}> & District & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, District, "findOneAndUpdate", {}>;
    remove(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, District, {}> & District & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, District, {}> & District & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, District, "findOneAndDelete", {}>;
}
