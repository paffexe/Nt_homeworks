import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateVenueDto } from "./dto/create-venue.dto";
import { UpdateVenueDto } from "./dto/update-venue.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Venue } from "./schemas/venue.entity";
import { isValidObjectId, Model } from "mongoose";
import { Region } from "../region/schemas/region.entity";
import { District } from "../district/schemas/district.entity";
import { VenuePhoto } from "../venue_photo/schemas/venue_photo.entity";

@Injectable()
export class VenueService {
  constructor(
    @InjectModel(Venue.name) private readonly venueSchema: Model<Venue>,
    @InjectModel(Region.name) private readonly regionSchema: Model<Region>,
    @InjectModel(District.name)
    private readonly districtSchema: Model<District>,
    @InjectModel(VenuePhoto.name)
    private readonly photoSchema: Model<VenuePhoto>
  ) {}
  async create(createVenueDto: CreateVenueDto) {
    const { region_id, district_id, ...rest } = createVenueDto;

    if (!isValidObjectId(region_id) || !isValidObjectId(district_id)) {
      throw new BadRequestException("Region_id yoki District_id noto'g'ri");
    }

    const region = await this.regionSchema.findById(region_id);

    if (!region) {
      throw new BadRequestException("Bunday region yo'q");
    }

    const district = await this.districtSchema.findById(district_id);

    if (!district) {
      throw new BadRequestException("Bunday district yo'q");
    }

    const venue = await this.venueSchema.create({
      ...rest, // faqat Venue modelidagi propertylar
      regions: [region._id],
      districts: [district._id],
    });

    // console.log(createVenueDto);
    // const venue = await this.venueSchema.create(createVenueDto);
    // venue.regions.push(region);
    // await venue.save();

    // venue.districts.push(district);
    // await venue.save();
    return venue;
  }

  findAll() {
    return this.venueSchema.find().populate("regions").populate("districts");
  }

  findOne(id: string) {
    return `This action returns a #${id} venue`;
  }

  update(id: string, updateVenueDto: UpdateVenueDto) {
    return `This action updates a #${id} venue`;
  }

  remove(id: string) {
    return `This action removes a #${id} venue`;
  }
}
