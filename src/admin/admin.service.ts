import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Admin } from "./schemas/admin.entity";
import { Model } from "mongoose";
import * as bcrypt from "bcrypt";

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private readonly adminShema: Model<Admin>
  ) {}
  async create(createAdminDto: CreateAdminDto) {
    const { password, confirm_password } = createAdminDto;

    if (password !== confirm_password) {
      throw new BadRequestException("Passwords must match each other!");
    }

    const hashed_password = await bcrypt.hash(password, 7);

    console.log(hashed_password);
    return this.adminShema.create({
      ...createAdminDto,
      password: hashed_password,
    });
  }

  findAll() {
    return this.adminShema.find();
  }

  findOne(id: string) {
    return this.adminShema.findById(id);
  }

  findByEmail(email: string) {
    return this.adminShema.findOne({ email });
  }

  update(id: string, updateAdminDto: UpdateAdminDto) {
    return this.adminShema.findByIdAndUpdate(id, updateAdminDto);
  }

  remove(id: string) {
    return this.adminShema.findByIdAndDelete(id);
  }

  async updateRefreshToken(id: string, refresh_token: string) {
    const updatedUser = await this.adminShema.findByIdAndUpdate(id, {
      refresh_token,
    });
    return updatedUser;
  }
}
