import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateTypeDto } from "./dto/create-type.dto";
import { UpdateTypeDto } from "./dto/update-type.dto";
import { Type, TypeDocument } from "./schemas/type.entity";

@Injectable()
export class TypesService {
  constructor(
    @InjectModel(Type.name)
    private readonly typeSchema: Model<TypeDocument>
  ) {}

  async create(createTypeDto: CreateTypeDto) {
    const data = await this.typeSchema.create(createTypeDto);
    return data;
  }

  async findAll() {
    const data = await this.typeSchema.find();
    return data;
  }

  findOne(id: string) {
    return this.typeSchema.findById(id);
  }

  update(id: string, updateTypeDto: UpdateTypeDto) {
    return this.typeSchema.findByIdAndUpdate(id, updateTypeDto);
  }

  remove(id: string) {
    return this.typeSchema.findByIdAndDelete(id);
  }
}
