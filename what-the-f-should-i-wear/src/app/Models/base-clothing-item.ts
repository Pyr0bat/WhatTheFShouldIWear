import { ClothingType } from '../Enums/clothing-type';
import { ColorId } from '../Enums/colors';

export class BaseClothingItem {
    public color: ColorId;
    public type: ClothingType;
    public numberOfRemainingUses: number;  
    public itemName: string;  
}
