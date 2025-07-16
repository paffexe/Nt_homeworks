import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateLangDto } from "./dto/create-lang.dto";
import { UpdateLangDto } from "./dto/update-lang.dto";
import { Lang, LangDocument } from "./schemas/lang.entity";

@Injectable()
export class LangService {
  constructor(
    @InjectModel(Lang.name)
    private readonly langSchema: Model<LangDocument>
  ) {}

  async create(createLangDto: CreateLangDto) {
    return this.langSchema.create(createLangDto);
  }

  findAll() {
    return this.langSchema.find();
  }

  findOne(id: string) {
    return this.langSchema.findById(id);
  }

  update(id: string, updateLangDto: UpdateLangDto) {
    return this.langSchema.findByIdAndUpdate(id, updateLangDto);
  }

  remove(id: string) {
    return this.langSchema.findByIdAndDelete(id);
  }
}
