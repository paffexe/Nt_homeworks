import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as bcrypt from "bcrypt";

import { Customer } from "./schemas/customer.entity";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private readonly customerModel: Model<Customer>
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const { password, confirm_password } = createCustomerDto;

    if (password !== confirm_password) {
      throw new BadRequestException("Passwords must match each other!");
    }

    const hashedPassword = await bcrypt.hash(password, 7);

    return this.customerModel.create({
      ...createCustomerDto,
      password: hashedPassword,
    });
  }

  findAll() {
    return this.customerModel.find();
  }

  findOne(id: string) {
    return this.customerModel.findById(id);
  }

  findByEmail(email: string) {
    return this.customerModel.findOne({ email });
  }

  update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return this.customerModel.findByIdAndUpdate(id, updateCustomerDto);
  }

  remove(id: string) {
    return this.customerModel.findByIdAndDelete(id);
  }

  async updateRefreshToken(id: string, refresh_token: string) {
    return this.customerModel.findByIdAndUpdate(id, { refresh_token });
  }
}
