import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { isValidObjectId, Model } from "mongoose";
import { CreateVenuePhotoDto } from "./dto/create-venue_photo.dto";
import { UpdateVenuePhotoDto } from "./dto/update-venue_photo.dto";
import { VenuePhoto, VenuePhotoDocument } from "./schemas/venue_photo.entity";
import { Venue } from "../venue/schemas/venue.entity";

@Injectable()
export class VenuePhotoService {
  constructor(
    @InjectModel(VenuePhoto.name)
    private readonly venuePhotoSchema: Model<VenuePhotoDocument>,
    @InjectModel(Venue.name)
    private readonly venueSchema: Model<Venue>
  ) {}

  async create(createVenuePhotoDto: CreateVenuePhotoDto) {
    const { venue_id } = createVenuePhotoDto;

    if (!isValidObjectId(venue_id)) {
      throw new BadRequestException("Venue_id noto'g'ri");
    }

    const venue = await this.venueSchema.findById(venue_id);

    if (!venue) {
      throw new BadRequestException("Bunday venue yo'q");
    }

    const venuePhoto = await this.venuePhotoSchema.create(createVenuePhotoDto);
    return venuePhoto;
  }

  findAll() {
    return this.venuePhotoSchema.find();
  }

  findOne(id: string) {
    return this.venuePhotoSchema.findById(id);
  }

  update(id: string, updateVenuePhotoDto: UpdateVenuePhotoDto) {
    return this.venuePhotoSchema.findByIdAndUpdate(id, updateVenuePhotoDto);
  }

  remove(id: string) {
    return this.venuePhotoSchema.findByIdAndDelete(id);
  }
}
