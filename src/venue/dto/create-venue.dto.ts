import mongoose from "mongoose";

export class CreateVenueDto {
  name: string;
  address: string;
  location: string;
  site: string;
  phone: string;
  schema: string;
  region_id: string;
  district_id: string;
  photo_id: string;
}
