import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { EventService } from "./event.service";
import { EventController } from "./event.controller";
import { Events, EventSchema } from "./entities/event.entity";
import {
  EventType,
  EventTypeSchema,
} from "../event_type/schemas/event_type.entity";
import {
  HumanCategory,
  HumanCategorySchema,
} from "../human_category/schemas/human_category.entity";
import { Venue, VenueSchema } from "../venue/schemas/venue.entity";
import { Lang, LangSchema } from "../lang/schemas/lang.entity";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Events.name, schema: EventSchema },
      { name: EventType.name, schema: EventTypeSchema },
      { name: HumanCategory.name, schema: HumanCategorySchema },
      { name: Venue.name, schema: VenueSchema },
      { name: Lang.name, schema: LangSchema },
    ]),
  ],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
