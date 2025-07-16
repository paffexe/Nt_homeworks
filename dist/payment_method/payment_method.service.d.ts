import { CreatePaymentMethodDto } from "./dto/create-payment_method.dto";
import { UpdatePaymentMethodDto } from "./dto/update-payment_method.dto";
import { PaymentMethod } from "./schemas/payment_method.entity";
import { Model } from "mongoose";
export declare class PaymentMethodService {
    private readonly paymentMethodSchema;
    constructor(paymentMethodSchema: Model<PaymentMethod>);
    create(createPaymentMethodDto: CreatePaymentMethodDto): Promise<import("mongoose").Document<unknown, {}, PaymentMethod, {}> & PaymentMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, PaymentMethod, {}> & PaymentMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, PaymentMethod, {}> & PaymentMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, PaymentMethod, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, PaymentMethod, {}> & PaymentMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, PaymentMethod, {}> & PaymentMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, PaymentMethod, "findOne", {}>;
    update(id: string, updatePaymentMethodDto: UpdatePaymentMethodDto): import("mongoose").Query<(import("mongoose").Document<unknown, {}, PaymentMethod, {}> & PaymentMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, PaymentMethod, {}> & PaymentMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, PaymentMethod, "findOneAndUpdate", {}>;
    remove(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, PaymentMethod, {}> & PaymentMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, PaymentMethod, {}> & PaymentMethod & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, PaymentMethod, "findOneAndDelete", {}>;
}
