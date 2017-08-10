import { LengthType } from '../Enums/length-types';
import { BaseClothingItem } from './base-clothing-item';
import { ColorId } from '../Enums/colors';
import { ClothingType } from '../Enums/clothing-type';

export class Pant extends BaseClothingItem {
    public length: LengthType;

        constructor(color: ColorId, remainingUses: number, name: string, length: LengthType) {
                super();
                this.type = ClothingType.pants;
                this.color = color;
                this.numberOfRemainingUses = remainingUses;
                this.itemName = name;
                this.length = length;
        }
}