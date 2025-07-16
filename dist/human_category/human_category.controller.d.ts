import { HumanCategoryService } from './human_category.service';
import { CreateHumanCategoryDto } from './dto/create-human_category.dto';
import { UpdateHumanCategoryDto } from './dto/update-human_category.dto';
export declare class HumanCategoryController {
    private readonly humanCategoryService;
    constructor(humanCategoryService: HumanCategoryService);
    create(createHumanCategoryDto: CreateHumanCategoryDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/human_category.entity").HumanCategory, {}> & import("./schemas/human_category.entity").HumanCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/human_category.entity").HumanCategory, {}> & import("./schemas/human_category.entity").HumanCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/human_category.entity").HumanCategory, {}> & import("./schemas/human_category.entity").HumanCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/human_category.entity").HumanCategory, {}> & import("./schemas/human_category.entity").HumanCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/human_category.entity").HumanCategory, {}> & import("./schemas/human_category.entity").HumanCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/human_category.entity").HumanCategory, {}> & import("./schemas/human_category.entity").HumanCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/human_category.entity").HumanCategory, {}> & import("./schemas/human_category.entity").HumanCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/human_category.entity").HumanCategory, {}> & import("./schemas/human_category.entity").HumanCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/human_category.entity").HumanCategory, {}> & import("./schemas/human_category.entity").HumanCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/human_category.entity").HumanCategory, {}> & import("./schemas/human_category.entity").HumanCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/human_category.entity").HumanCategory, {}> & import("./schemas/human_category.entity").HumanCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/human_category.entity").HumanCategory, {}> & import("./schemas/human_category.entity").HumanCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "findOne", {}>;
    update(id: string, updateHumanCategoryDto: UpdateHumanCategoryDto): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/human_category.entity").HumanCategory, {}> & import("./schemas/human_category.entity").HumanCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/human_category.entity").HumanCategory, {}> & import("./schemas/human_category.entity").HumanCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/human_category.entity").HumanCategory, {}> & import("./schemas/human_category.entity").HumanCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/human_category.entity").HumanCategory, {}> & import("./schemas/human_category.entity").HumanCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/human_category.entity").HumanCategory, {}> & import("./schemas/human_category.entity").HumanCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "findOneAndUpdate", {}>;
    remove(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/human_category.entity").HumanCategory, {}> & import("./schemas/human_category.entity").HumanCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/human_category.entity").HumanCategory, {}> & import("./schemas/human_category.entity").HumanCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/human_category.entity").HumanCategory, {}> & import("./schemas/human_category.entity").HumanCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/human_category.entity").HumanCategory, {}> & import("./schemas/human_category.entity").HumanCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/human_category.entity").HumanCategory, {}> & import("./schemas/human_category.entity").HumanCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "findOneAndDelete", {}>;
}
