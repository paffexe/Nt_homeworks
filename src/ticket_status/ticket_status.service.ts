import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateTicketStatusDto } from "./dto/create-ticket_status.dto";
import { UpdateTicketStatusDto } from "./dto/update-ticket_status.dto";
import {
  TicketStatus,
  TicketStatusDocument,
} from "./schemas/ticket_status.entity";

@Injectable()
export class TicketStatusService {
  constructor(
    @InjectModel(TicketStatus.name)
    private readonly ticketStatusSchema: Model<TicketStatusDocument>
  ) {}

  async create(createTicketStatusDto: CreateTicketStatusDto) {
    return this.ticketStatusSchema.create(createTicketStatusDto);
  }

  findAll() {
    return this.ticketStatusSchema.find();
  }

  findOne(id: string) {
    return this.ticketStatusSchema.findById(id);
  }

  update(id: string, updateTicketStatusDto: UpdateTicketStatusDto) {
    return this.ticketStatusSchema.findByIdAndUpdate(id, updateTicketStatusDto);
  }

  remove(id: string) {
    return this.ticketStatusSchema.findByIdAndDelete(id);
  }
}
