import {
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
} from "class-validator";

export class CreateTicketDto {
  @IsNumber()
  @Min(0)
  price: number;

  @IsNumber()
  @Min(0)
  service_fee: number;

  @IsString()
  @IsNotEmpty()
  ticket_type: string;

  @IsMongoId()
  @IsNotEmpty()
  event_id: string;

  @IsMongoId()
  @IsNotEmpty()
  seat_id: string;

  @IsMongoId()
  @IsNotEmpty()
  status_id: string;
}
