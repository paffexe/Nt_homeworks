import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateDeliveryMethodDto } from "./dto/create-delivery_method.dto";
import { UpdateDeliveryMethodDto } from "./dto/update-delivery_method.dto";
import {
  DeliveryMethod,
  DeliveryMethodDocument,
} from "./schemas/delivery_method.entity";

@Injectable()
export class DeliveryMethodService {
  constructor(
    @InjectModel(DeliveryMethod.name)
    private readonly deliveryMethodSchema: Model<DeliveryMethodDocument>
  ) {}

  async create(createDeliveryMethodDto: CreateDeliveryMethodDto) {
    return this.deliveryMethodSchema.create(createDeliveryMethodDto);
  }

  findAll() {
    return this.deliveryMethodSchema.find();
  }

  findOne(id: string) {
    return this.deliveryMethodSchema.findById(id);
  }

  update(id: string, updateDeliveryMethodDto: UpdateDeliveryMethodDto) {
    return this.deliveryMethodSchema.findByIdAndUpdate(
      id,
      updateDeliveryMethodDto
    );
  }

  remove(id: string) {
    return this.deliveryMethodSchema.findByIdAndDelete(id);
  }
}
