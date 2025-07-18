import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { Cart } from "./entities/cart.entity";

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name) private readonly cartModel: Model<Cart>
  ) {}

  async create(createCartDto: CreateCartDto): Promise<Cart> {
    const cart = new this.cartModel(createCartDto);
    return cart.save();
  }

  async findAll(): Promise<Cart[]> {
    return this.cartModel.find().populate("customer_id");
  }

  async findOne(id: string): Promise<Cart> {
    const cart = await this.cartModel.findById(id).populate("customer_id");

    if (!cart) {
      throw new NotFoundException(`Cart with ID ${id} not found`);
    }

    return cart;
  }

  async update(id: string, updateCartDto: UpdateCartDto): Promise<Cart> {
    const updated = await this.cartModel.findByIdAndUpdate(id, updateCartDto, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      throw new NotFoundException(`Cart with ID ${id} not found`);
    }

    return updated;
  }

  async remove(id: string): Promise<{ message: string }> {
    const deleted = await this.cartModel.findByIdAndDelete(id);

    if (!deleted) {
      throw new NotFoundException(`Cart with ID ${id} not found`);
    }

    return { message: `Cart with ID ${id} successfully deleted` };
  }
}
