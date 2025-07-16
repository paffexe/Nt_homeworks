import mongoose from "mongoose";
export declare class CreateVenuePhotoDto {
    img_url: string;
    venue_id: mongoose.Schema.Types.ObjectId;
}
