import {
  IsArray,
  IsDateString,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
} from "class-validator";

export class CreateBookingDto {
  @IsArray()
  @IsMongoId({ each: true })
  @IsNotEmpty()
  cart_id: string[]; // array of cart ObjectIds

  @IsMongoId()
  @IsNotEmpty()
  payment_method_id: string;

  @IsMongoId()
  @IsNotEmpty()
  delivery_method_id: string;

  @IsOptional()
  @IsDateString()
  finished_at?: string;
}
