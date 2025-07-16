import { LangService } from "./lang.service";
import { CreateLangDto } from "./dto/create-lang.dto";
import { UpdateLangDto } from "./dto/update-lang.dto";
export declare class LangController {
    private readonly langService;
    constructor(langService: LangService);
    create(createLangDto: CreateLangDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/lang.entity").Lang, {}> & import("./schemas/lang.entity").Lang & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/lang.entity").Lang, {}> & import("./schemas/lang.entity").Lang & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/lang.entity").Lang, {}> & import("./schemas/lang.entity").Lang & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/lang.entity").Lang, {}> & import("./schemas/lang.entity").Lang & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/lang.entity").Lang, {}> & import("./schemas/lang.entity").Lang & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/lang.entity").Lang, {}> & import("./schemas/lang.entity").Lang & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/lang.entity").Lang, {}> & import("./schemas/lang.entity").Lang & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/lang.entity").Lang, {}> & import("./schemas/lang.entity").Lang & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/lang.entity").Lang, {}> & import("./schemas/lang.entity").Lang & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/lang.entity").Lang, {}> & import("./schemas/lang.entity").Lang & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/lang.entity").Lang, {}> & import("./schemas/lang.entity").Lang & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/lang.entity").Lang, {}> & import("./schemas/lang.entity").Lang & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "findOne", {}>;
    update(id: string, updateLangDto: UpdateLangDto): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/lang.entity").Lang, {}> & import("./schemas/lang.entity").Lang & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/lang.entity").Lang, {}> & import("./schemas/lang.entity").Lang & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/lang.entity").Lang, {}> & import("./schemas/lang.entity").Lang & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/lang.entity").Lang, {}> & import("./schemas/lang.entity").Lang & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/lang.entity").Lang, {}> & import("./schemas/lang.entity").Lang & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "findOneAndUpdate", {}>;
    remove(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/lang.entity").Lang, {}> & import("./schemas/lang.entity").Lang & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/lang.entity").Lang, {}> & import("./schemas/lang.entity").Lang & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/lang.entity").Lang, {}> & import("./schemas/lang.entity").Lang & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/lang.entity").Lang, {}> & import("./schemas/lang.entity").Lang & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/lang.entity").Lang, {}> & import("./schemas/lang.entity").Lang & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "findOneAndDelete", {}>;
}
