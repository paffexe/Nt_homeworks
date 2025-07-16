import { Model } from "mongoose";
import { CreateRegionDto } from "./dto/create-region.dto";
import { UpdateRegionDto } from "./dto/update-region.dto";
import { Region, RegionDocument } from "./schemas/region.entity";
export declare class RegionService {
    private readonly regionSchema;
    constructor(regionSchema: Model<RegionDocument>);
    create(createRegionDto: CreateRegionDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Region, {}> & Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, Region, {}> & Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Region, {}> & Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, Region, {}> & Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Region, {}> & Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, Region, {}> & Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, Region, {}> & Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Region, {}> & Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, Region, {}> & Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Region, {}> & Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, Region, {}> & Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, Region, {}> & Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "findOne", {}>;
    update(id: string, updateRegionDto: UpdateRegionDto): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Region, {}> & Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, Region, {}> & Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Region, {}> & Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, Region, {}> & Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, Region, {}> & Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "findOneAndUpdate", {}>;
    remove(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Region, {}> & Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, Region, {}> & Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Region, {}> & Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, Region, {}> & Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, Region, {}> & Region & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "findOneAndDelete", {}>;
}
