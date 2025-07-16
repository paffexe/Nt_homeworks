import { PaymentMethodService } from "./payment_method.service";
import { CreatePaymentMethodDto } from "./dto/create-payment_method.dto";
import { UpdatePaymentMethodDto } from "./dto/update-payment_method.dto";
export declare class PaymentMethodController {
    private readonly paymentMethodService;
    constructor(paymentMethodService: PaymentMethodService);
    create(createPaymentMethodDto: CreatePaymentMethodDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/payment_method.entity").PaymentMethod, {}> & import("./schemas/payment_method.entity").PaymentMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schemas/payment_method.entity").PaymentMethod, {}> & import("./schemas/payment_method.entity").PaymentMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, import("./schemas/payment_method.entity").PaymentMethod, {}> & import("./schemas/payment_method.entity").PaymentMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schemas/payment_method.entity").PaymentMethod, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schemas/payment_method.entity").PaymentMethod, {}> & import("./schemas/payment_method.entity").PaymentMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("./schemas/payment_method.entity").PaymentMethod, {}> & import("./schemas/payment_method.entity").PaymentMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schemas/payment_method.entity").PaymentMethod, "findOne", {}>;
    update(id: string, updatePaymentMethodDto: UpdatePaymentMethodDto): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schemas/payment_method.entity").PaymentMethod, {}> & import("./schemas/payment_method.entity").PaymentMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("./schemas/payment_method.entity").PaymentMethod, {}> & import("./schemas/payment_method.entity").PaymentMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schemas/payment_method.entity").PaymentMethod, "findOneAndUpdate", {}>;
    remove(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schemas/payment_method.entity").PaymentMethod, {}> & import("./schemas/payment_method.entity").PaymentMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("./schemas/payment_method.entity").PaymentMethod, {}> & import("./schemas/payment_method.entity").PaymentMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schemas/payment_method.entity").PaymentMethod, "findOneAndDelete", {}>;
}
