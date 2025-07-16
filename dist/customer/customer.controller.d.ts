import { CustomerService } from "./customer.service";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    create(createCustomerDto: CreateCustomerDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/customer.entity").Customer, {}> & import("./schemas/customer.entity").Customer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schemas/customer.entity").Customer, {}> & import("./schemas/customer.entity").Customer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, import("./schemas/customer.entity").Customer, {}> & import("./schemas/customer.entity").Customer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schemas/customer.entity").Customer, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schemas/customer.entity").Customer, {}> & import("./schemas/customer.entity").Customer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("./schemas/customer.entity").Customer, {}> & import("./schemas/customer.entity").Customer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schemas/customer.entity").Customer, "findOne", {}>;
    update(id: string, updateCustomerDto: UpdateCustomerDto): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schemas/customer.entity").Customer, {}> & import("./schemas/customer.entity").Customer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("./schemas/customer.entity").Customer, {}> & import("./schemas/customer.entity").Customer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schemas/customer.entity").Customer, "findOneAndUpdate", {}>;
    remove(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schemas/customer.entity").Customer, {}> & import("./schemas/customer.entity").Customer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("./schemas/customer.entity").Customer, {}> & import("./schemas/customer.entity").Customer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schemas/customer.entity").Customer, "findOneAndDelete", {}>;
}
