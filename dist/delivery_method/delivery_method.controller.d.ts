import { DeliveryMethodService } from "./delivery_method.service";
import { CreateDeliveryMethodDto } from "./dto/create-delivery_method.dto";
import { UpdateDeliveryMethodDto } from "./dto/update-delivery_method.dto";
export declare class DeliveryMethodController {
    private readonly deliveryMethodService;
    constructor(deliveryMethodService: DeliveryMethodService);
    create(createDeliveryMethodDto: CreateDeliveryMethodDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/delivery_method.entity").DeliveryMethod, {}> & import("./schemas/delivery_method.entity").DeliveryMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/delivery_method.entity").DeliveryMethod, {}> & import("./schemas/delivery_method.entity").DeliveryMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/delivery_method.entity").DeliveryMethod, {}> & import("./schemas/delivery_method.entity").DeliveryMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/delivery_method.entity").DeliveryMethod, {}> & import("./schemas/delivery_method.entity").DeliveryMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/delivery_method.entity").DeliveryMethod, {}> & import("./schemas/delivery_method.entity").DeliveryMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/delivery_method.entity").DeliveryMethod, {}> & import("./schemas/delivery_method.entity").DeliveryMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/delivery_method.entity").DeliveryMethod, {}> & import("./schemas/delivery_method.entity").DeliveryMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/delivery_method.entity").DeliveryMethod, {}> & import("./schemas/delivery_method.entity").DeliveryMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/delivery_method.entity").DeliveryMethod, {}> & import("./schemas/delivery_method.entity").DeliveryMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/delivery_method.entity").DeliveryMethod, {}> & import("./schemas/delivery_method.entity").DeliveryMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/delivery_method.entity").DeliveryMethod, {}> & import("./schemas/delivery_method.entity").DeliveryMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/delivery_method.entity").DeliveryMethod, {}> & import("./schemas/delivery_method.entity").DeliveryMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "findOne", {}>;
    update(id: string, updateDeliveryMethodDto: UpdateDeliveryMethodDto): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/delivery_method.entity").DeliveryMethod, {}> & import("./schemas/delivery_method.entity").DeliveryMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/delivery_method.entity").DeliveryMethod, {}> & import("./schemas/delivery_method.entity").DeliveryMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/delivery_method.entity").DeliveryMethod, {}> & import("./schemas/delivery_method.entity").DeliveryMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/delivery_method.entity").DeliveryMethod, {}> & import("./schemas/delivery_method.entity").DeliveryMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/delivery_method.entity").DeliveryMethod, {}> & import("./schemas/delivery_method.entity").DeliveryMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "findOneAndUpdate", {}>;
    remove(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/delivery_method.entity").DeliveryMethod, {}> & import("./schemas/delivery_method.entity").DeliveryMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/delivery_method.entity").DeliveryMethod, {}> & import("./schemas/delivery_method.entity").DeliveryMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/delivery_method.entity").DeliveryMethod, {}> & import("./schemas/delivery_method.entity").DeliveryMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("./schemas/delivery_method.entity").DeliveryMethod, {}> & import("./schemas/delivery_method.entity").DeliveryMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./schemas/delivery_method.entity").DeliveryMethod, {}> & import("./schemas/delivery_method.entity").DeliveryMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "findOneAndDelete", {}>;
}
