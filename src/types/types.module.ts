import { Module } from "@nestjs/common";
import { TypesService } from "./types.service";
import { TypesController } from "./types.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Type, TypeSchema } from "./schemas/type.entity";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Type.name,
        schema: TypeSchema,
      },
    ]),
  ],
  controllers: [TypesController],
  providers: [TypesService],
  exports: [TypesService],
})
export class TypesModule {}
