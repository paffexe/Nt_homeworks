import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateHumanCategoryDto } from "./dto/create-human_category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human_category.dto";
import { HumanCategory, HumanCategoryDocument } from "./schemas/human_category.entity";

@Injectable()
export class HumanCategoryService {
  constructor(
    @InjectModel(HumanCategory.name)
    private readonly humanCategorySchema: Model<HumanCategoryDocument>
  ) {}

  async create(createHumanCategoryDto: CreateHumanCategoryDto) {
    return this.humanCategorySchema.create(createHumanCategoryDto);
  }

  findAll() {
    return this.humanCategorySchema.find();
  }

  findOne(id: string) {
    return this.humanCategorySchema.findById(id);
  }

  update(id: string, updateHumanCategoryDto: UpdateHumanCategoryDto) {
    return this.humanCategorySchema.findByIdAndUpdate(
      id,
      updateHumanCategoryDto
    );
  }

  remove(id: string) {
    return this.humanCategorySchema.findByIdAndDelete(id);
  }
}
