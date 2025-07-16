import mongoose from "mongoose";

export class CreateVenuePhotoDto {
  img_url: string;
  venue_id: mongoose.Schema.Types.ObjectId;
}
