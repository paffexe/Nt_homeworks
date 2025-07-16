import { Gender } from "../schemas/human_category.entity";
export declare class CreateHumanCategoryDto {
    name: string;
    start_age: number;
    finish_age: number;
    gender: Gender;
}
