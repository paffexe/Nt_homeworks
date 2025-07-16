import { AdminService } from "./admin.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    create(createAdminDto: CreateAdminDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/admin.entity").Admin, {}> & import("./schemas/admin.entity").Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schemas/admin.entity").Admin, {}> & import("./schemas/admin.entity").Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, import("./schemas/admin.entity").Admin, {}> & import("./schemas/admin.entity").Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schemas/admin.entity").Admin, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schemas/admin.entity").Admin, {}> & import("./schemas/admin.entity").Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("./schemas/admin.entity").Admin, {}> & import("./schemas/admin.entity").Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schemas/admin.entity").Admin, "findOne", {}>;
    update(id: string, updateAdminDto: UpdateAdminDto): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schemas/admin.entity").Admin, {}> & import("./schemas/admin.entity").Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("./schemas/admin.entity").Admin, {}> & import("./schemas/admin.entity").Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schemas/admin.entity").Admin, "findOneAndUpdate", {}>;
    remove(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schemas/admin.entity").Admin, {}> & import("./schemas/admin.entity").Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("./schemas/admin.entity").Admin, {}> & import("./schemas/admin.entity").Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schemas/admin.entity").Admin, "findOneAndDelete", {}>;
}
