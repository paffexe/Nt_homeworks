import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateBookingDto } from "./dto/create-booking.dto";
import { UpdateBookingDto } from "./dto/update-booking.dto";
import { Booking } from "./entities/booking.entity";

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking.name) private readonly bookingModel: Model<Booking>
  ) {}

  async create(createBookingDto: CreateBookingDto): Promise<Booking> {
    const booking = new this.bookingModel(createBookingDto);
    return booking.save();
  }

  async findAll(): Promise<Booking[]> {
    return this.bookingModel
      .find()
      .populate("cart_id")
      .populate("payment_method_id")
      .populate("delivery_method_id");
  }

  async findOne(id: string): Promise<Booking> {
    const booking = await this.bookingModel
      .findById(id)
      .populate("cart_id")
      .populate("payment_method_id")
      .populate("delivery_method_id");

    if (!booking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }

    return booking;
  }

  async update(
    id: string,
    updateBookingDto: UpdateBookingDto
  ): Promise<Booking> {
    const updated = await this.bookingModel.findByIdAndUpdate(
      id,
      updateBookingDto,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updated) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }

    return updated;
  }

  async remove(id: string): Promise<{ message: string }> {
    const deleted = await this.bookingModel.findByIdAndDelete(id);
    if (!deleted) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }

    return { message: `Booking with ID ${id} successfully deleted` };
  }
}
