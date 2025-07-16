import { DistrictService } from './district.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
export declare class DistrictController {
    private readonly districtService;
    constructor(districtService: DistrictService);
    create(createDistrictDto: CreateDistrictDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/district.entity").District, {}> & import("./schemas/district.entity").District & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schemas/district.entity").District, {}> & import("./schemas/district.entity").District & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, import("./schemas/district.entity").District, {}> & import("./schemas/district.entity").District & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schemas/district.entity").District, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schemas/district.entity").District, {}> & import("./schemas/district.entity").District & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("./schemas/district.entity").District, {}> & import("./schemas/district.entity").District & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schemas/district.entity").District, "findOne", {}>;
    update(id: string, updateDistrictDto: UpdateDistrictDto): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schemas/district.entity").District, {}> & import("./schemas/district.entity").District & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("./schemas/district.entity").District, {}> & import("./schemas/district.entity").District & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schemas/district.entity").District, "findOneAndUpdate", {}>;
    remove(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schemas/district.entity").District, {}> & import("./schemas/district.entity").District & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("./schemas/district.entity").District, {}> & import("./schemas/district.entity").District & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schemas/district.entity").District, "findOneAndDelete", {}>;
}
