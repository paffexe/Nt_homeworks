import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TicketService } from "./ticket.service";
import { TicketController } from "./ticket.controller";
import { Seat, SeatSchema } from "../seat/schemas/seat.entity";
import {
  TicketStatus,
  TicketStatusSchema,
} from "../ticket_status/schemas/ticket_status.entity";
import { Ticket, TicketSchema } from "./entities/ticket.entity";
import { Events, EventSchema } from "../event/entities/event.entity";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Ticket.name, schema: TicketSchema },
      { name: Events.name, schema: EventSchema },
      { name: Seat.name, schema: SeatSchema },
      { name: TicketStatus.name, schema: TicketStatusSchema },
    ]),
  ],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
