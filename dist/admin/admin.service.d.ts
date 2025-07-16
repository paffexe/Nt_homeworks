import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { Admin } from "./schemas/admin.entity";
import { Model } from "mongoose";
export declare class AdminService {
    private readonly adminShema;
    constructor(adminShema: Model<Admin>);
    create(createAdminDto: CreateAdminDto): Promise<import("mongoose").Document<unknown, {}, Admin, {}> & Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Admin, {}> & Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, Admin, {}> & Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, Admin, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Admin, {}> & Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, Admin, {}> & Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, Admin, "findOne", {}>;
    findByEmail(email: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Admin, {}> & Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, Admin, {}> & Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, Admin, "findOne", {}>;
    update(id: string, updateAdminDto: UpdateAdminDto): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Admin, {}> & Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, Admin, {}> & Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, Admin, "findOneAndUpdate", {}>;
    remove(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Admin, {}> & Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, Admin, {}> & Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, Admin, "findOneAndDelete", {}>;
    updateRefreshToken(id: string, refresh_token: string): Promise<(import("mongoose").Document<unknown, {}, Admin, {}> & Admin & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
