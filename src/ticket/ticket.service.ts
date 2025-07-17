import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateTicketDto } from "./dto/create-ticket.dto";
import { UpdateTicketDto } from "./dto/update-ticket.dto";
import { Ticket } from "./entities/ticket.entity";

@Injectable()
export class TicketService {
  constructor(
    @InjectModel(Ticket.name) private readonly ticketModel: Model<Ticket>
  ) {}

  async create(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const ticket = new this.ticketModel(createTicketDto);
    return ticket.save();
  }

  async findAll(): Promise<Ticket[]> {
    return this.ticketModel
      .find()
      .populate("event_id")
      .populate("seat_id")
      .populate("status_id");
  }

  async findOne(id: string): Promise<Ticket> {
    const ticket = await this.ticketModel
      .findById(id)
      .populate("event_id")
      .populate("seat_id")
      .populate("status_id");

    if (!ticket) {
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }

    return ticket;
  }

  async update(id: string, updateTicketDto: UpdateTicketDto): Promise<Ticket> {
    const updated = await this.ticketModel.findByIdAndUpdate(
      id,
      updateTicketDto,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updated) {
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }

    return updated;
  }

  async remove(id: string): Promise<{ message: string }> {
    const deleted = await this.ticketModel.findByIdAndDelete(id);
    if (!deleted) {
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }
    return { message: `Ticket with ID ${id} successfully deleted` };
  }
}
