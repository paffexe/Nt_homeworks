import { Model } from "mongoose";
import { Customer } from "./schemas/customer.entity";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
export declare class CustomerService {
    private readonly customerModel;
    constructor(customerModel: Model<Customer>);
    create(createCustomerDto: CreateCustomerDto): Promise<import("mongoose").Document<unknown, {}, Customer, {}> & Customer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Customer, {}> & Customer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, Customer, {}> & Customer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, Customer, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Customer, {}> & Customer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, Customer, {}> & Customer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, Customer, "findOne", {}>;
    findByEmail(email: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Customer, {}> & Customer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, Customer, {}> & Customer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, Customer, "findOne", {}>;
    update(id: string, updateCustomerDto: UpdateCustomerDto): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Customer, {}> & Customer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, Customer, {}> & Customer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, Customer, "findOneAndUpdate", {}>;
    remove(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Customer, {}> & Customer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, Customer, {}> & Customer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, Customer, "findOneAndDelete", {}>;
    updateRefreshToken(id: string, refresh_token: string): Promise<(import("mongoose").Document<unknown, {}, Customer, {}> & Customer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
