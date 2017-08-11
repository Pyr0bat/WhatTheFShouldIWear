import { UnderwearType } from '../Enums/underwear-type';
import { BaseClothingItem } from './base-clothing-item';
import { ColorId } from '../Enums/colors';
import { ClothingType } from '../Enums/clothing-type';

export class Underwear extends BaseClothingItem {
    public underwearType: UnderwearType

        constructor(color: ColorId, remainingUses: number, name: string, type: UnderwearType) {
                super();
                this.type = ClothingType.underwear;
                this.color = color;
                this.numberOfRemainingUses = remainingUses;
                this.itemName = name;
                this.underwearType = type;
                this.currentRemainingNumberOfUses = remainingUses;
                this.isInLaundry = false;
        }
}