import { ColorEnum, SizeEnum } from "../enums";

export interface IAddItem {
    productId: string;
    color: ColorEnum;
    size: SizeEnum;
}