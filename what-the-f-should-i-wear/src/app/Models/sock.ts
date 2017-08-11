import { SockType } from '../Enums/sock-type';
import { BaseClothingItem } from './base-clothing-item';
import { ColorId } from '../Enums/colors';
import { ClothingType } from '../Enums/clothing-type';

export class Sock extends BaseClothingItem {
    public sockType: SockType;

        constructor(color: ColorId, remainingUses: number, name: string, type: SockType) {
                super();
                this.type = ClothingType.socks;
                this.color = color;
                this.numberOfRemainingUses = remainingUses;
                this.itemName = name;
                this.sockType = type;
                this.currentRemainingNumberOfUses = remainingUses;
                this.isInLaundry = false;
        }
}