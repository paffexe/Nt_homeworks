import { Injectable } from "@nestjs/common";
import { CreatePaymentMethodDto } from "./dto/create-payment_method.dto";
import { UpdatePaymentMethodDto } from "./dto/update-payment_method.dto";
import { InjectModel } from "@nestjs/mongoose";
import { PaymentMethod } from "./schemas/payment_method.entity";
import { Model } from "mongoose";

@Injectable()
export class PaymentMethodService {
  constructor(
    @InjectModel(PaymentMethod.name)
    private readonly paymentMethodSchema: Model<PaymentMethod>
  ) {}
  async create(createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.paymentMethodSchema.create(createPaymentMethodDto);
  }

  findAll() {
    return this.paymentMethodSchema.find();
  }

  findOne(id: string) {
    return this.paymentMethodSchema.findById(id);
  }

  update(id: string, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    return this.paymentMethodSchema.findByIdAndUpdate(
      id,
      updatePaymentMethodDto
    );
  }

  remove(id: string) {
    return this.paymentMethodSchema.findByIdAndDelete(id);
  }
}
