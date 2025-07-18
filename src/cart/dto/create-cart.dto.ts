import {
  IsMongoId,
  IsOptional,
  IsDateString,
  IsNotEmpty,
} from "class-validator";

export class CreateCartDto {
  @IsMongoId()
  @IsNotEmpty()
  customer_id: string;

  @IsOptional()
  @IsDateString()
  finished_at?: string;
}
