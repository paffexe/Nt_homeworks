import { IsMongoId, IsNotEmpty } from "class-validator";

export class CreateCartItemDto {
  @IsMongoId()
  @IsNotEmpty()
  cart_id: string;

  @IsMongoId()
  @IsNotEmpty()
  ticket_id: string;
}
