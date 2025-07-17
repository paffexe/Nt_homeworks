import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { Events } from "./entities/event.entity";

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Events.name) private readonly eventModel: Model<Event>
  ) {}

  async create(createEventDto: CreateEventDto): Promise<Event> {
    const event = new this.eventModel(createEventDto);
    return event.save();
  }

  async findAll(): Promise<Event[]> {
    return this.eventModel
      .find()
      .populate("event_type_id")
      .populate("human_category_id")
      .populate("venue_id")
      .populate("lang_id");
  }

  async findOne(id: string): Promise<Event> {
    const event = await this.eventModel
      .findById(id)
      .populate("event_type_id")
      .populate("human_category_id")
      .populate("venue_id")
      .populate("lang_id");

    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }

    return event;
  }

  async update(id: string, updateEventDto: UpdateEventDto): Promise<Event> {
    const updated = await this.eventModel.findByIdAndUpdate(
      id,
      updateEventDto,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updated) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }

    return updated;
  }

  async remove(id: string): Promise<{ message: string }> {
    const result = await this.eventModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }
    return { message: `Event with ID ${id} successfully deleted` };
  }
}
