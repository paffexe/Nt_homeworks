import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDateString,
  IsMongoId,
} from "class-validator";

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  photo?: string;

  @IsDateString()
  @IsNotEmpty()
  start_date: string;

  @IsString()
  @IsNotEmpty()
  start_time: string;

  @IsDateString()
  @IsNotEmpty()
  finish_date: string;

  @IsString()
  @IsNotEmpty()
  finish_time: string;

  @IsString()
  @IsOptional()
  info?: string;

  @IsDateString()
  @IsNotEmpty()
  release_date: string;

  @IsMongoId()
  @IsNotEmpty()
  event_type_id: string;

  @IsMongoId()
  @IsNotEmpty()
  human_category_id: string;

  @IsMongoId()
  @IsNotEmpty()
  venue_id: string;

  @IsMongoId()
  @IsNotEmpty()
  lang_id: string;
}
