import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateCartItemDto } from "./dto/create-cart_item.dto";
import { UpdateCartItemDto } from "./dto/update-cart_item.dto";
import { CartItem } from "./entities/cart_item.entity";

@Injectable()
export class CartItemService {
  constructor(
    @InjectModel(CartItem.name)
    private readonly cartItemModel: Model<CartItem>
  ) {}

  async create(createCartItemDto: CreateCartItemDto): Promise<CartItem> {
    const cartItem = new this.cartItemModel(createCartItemDto);
    return cartItem.save();
  }

  async findAll(): Promise<CartItem[]> {
    return this.cartItemModel.find().populate("cart_id").populate("ticket_id");
  }

  async findOne(id: string): Promise<CartItem> {
    const cartItem = await this.cartItemModel
      .findById(id)
      .populate("cart_id")
      .populate("ticket_id");

    if (!cartItem) {
      throw new NotFoundException(`CartItem with ID ${id} not found`);
    }

    return cartItem;
  }

  async update(
    id: string,
    updateCartItemDto: UpdateCartItemDto
  ): Promise<CartItem> {
    const updated = await this.cartItemModel.findByIdAndUpdate(
      id,
      updateCartItemDto,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updated) {
      throw new NotFoundException(`CartItem with ID ${id} not found`);
    }

    return updated;
  }

  async remove(id: string): Promise<{ message: string }> {
    const deleted = await this.cartItemModel.findByIdAndDelete(id);

    if (!deleted) {
      throw new NotFoundException(`CartItem with ID ${id} not found`);
    }

    return { message: `CartItem with ID ${id} successfully deleted` };
  }
}
