import { IsMongoId, IsNotEmpty } from "class-validator";

export class CreateVenueTypeDto {
  @IsNotEmpty()
  @IsMongoId()
  venue_id: string;

  @IsNotEmpty()
  @IsMongoId()
  type_id: string;
}
