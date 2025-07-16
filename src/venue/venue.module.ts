import { Module } from "@nestjs/common";
import { VenueService } from "./venue.service";
import { VenueController } from "./venue.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Venue, VenueSchema } from "./schemas/venue.entity";
import { Region, RegionSchema } from "../region/schemas/region.entity";
import { District, DistrictSchema } from "../district/schemas/district.entity";
import {
  VenuePhoto,
  VenuePhotoSchema,
} from "../venue_photo/schemas/venue_photo.entity";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Venue.name,
        schema: VenueSchema,
      },
      {
        name: Region.name,
        schema: RegionSchema,
      },
      {
        name: District.name,
        schema: DistrictSchema,
      },
      {
        name: VenuePhoto.name,
        schema: VenuePhotoSchema,
      },
    ]),
  ],
  controllers: [VenueController],
  providers: [VenueService],
})
export class VenueModule {}
