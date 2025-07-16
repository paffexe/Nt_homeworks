import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateEventTypeDto } from "./dto/create-event_type.dto";
import { UpdateEventTypeDto } from "./dto/update-event_type.dto";
import { EventType, EventTypeDocument } from "./schemas/event_type.entity";

@Injectable()
export class EventTypeService {
  constructor(
    @InjectModel(EventType.name)
    private readonly eventTypeSchema: Model<EventTypeDocument>
  ) {}

  async create(createEventTypeDto: CreateEventTypeDto) {
    return this.eventTypeSchema.create(createEventTypeDto);
  }

  findAll() {
    return this.eventTypeSchema.find();
  }

  findOne(id: string) {
    return this.eventTypeSchema.findById(id);
  }

  update(id: string, updateEventTypeDto: UpdateEventTypeDto) {
    return this.eventTypeSchema.findByIdAndUpdate(id, updateEventTypeDto);
  }

  remove(id: string) {
    return this.eventTypeSchema.findByIdAndDelete(id);
  }
}
