import { forEach } from '@angular/router/src/utils/collection';
import { BaseClothingItem } from '../Models/base-clothing-item';
import { Injectable } from '@angular/core';

@Injectable()
export class LaundryService {
    redBin: InLaundryClothingItem[] = [];
    orangeBin: InLaundryClothingItem[] = [];
    yellowBin: InLaundryClothingItem[] = [];
    greenBin: InLaundryClothingItem[] = [];
    blueBin: InLaundryClothingItem[] = [];
    indigoBin: InLaundryClothingItem[] = [];
    violetBin: InLaundryClothingItem[] = [];

    addRed(laundryItem: InLaundryClothingItem) {
        this.redBin.push(laundryItem);
        console.log("Pushed into red bin, count = " + this.redBin.length);
        this.printContents(this.redBin);
    }
    
    addOrange(laundryItem: InLaundryClothingItem) {
        this.orangeBin.push(laundryItem);
        console.log("Pushed into orange bin, count = " + this.orangeBin.length);
        this.printContents(this.orangeBin);
    }
    addYellow(laundryItem: InLaundryClothingItem) {
        this.yellowBin.push(laundryItem);
        console.log("Pushed into yellow bin, count = " + this.yellowBin.length);
        this.printContents(this.yellowBin);
    }
    addGreen(laundryItem: InLaundryClothingItem) {
        this.greenBin.push(laundryItem);
        console.log("Pushed into green bin, count = " + this.greenBin.length);
        this.printContents(this.greenBin);
    }
    addBlue(laundryItem: InLaundryClothingItem) {
        this.blueBin.push(laundryItem);
        console.log("Pushed into blue bin, count = " + this.blueBin.length);
        this.printContents(this.blueBin);
    }
    addIndigo(laundryItem: InLaundryClothingItem) {
        this.indigoBin.push(laundryItem);
        console.log("Pushed into indigo bin, count = " + this.indigoBin.length);
        this.printContents(this.indigoBin);
    }
    addViolet(laundryItem: InLaundryClothingItem) {
        this.violetBin.push(laundryItem);
        console.log("Pushed into violet bin, count = " + this.violetBin.length);
        this.printContents(this.violetBin);
    }


    printContents(bin: InLaundryClothingItem[]) {
        for(var i= 0; i < bin.length; i++){
            console.log("bin["+i+"] = " + bin[i].clothingItem.itemName);
        }
    }
}

export class InLaundryClothingItem {
    clothingItem: BaseClothingItem;
    arrayIndex: number;

    constructor(dirtyClothingItem: BaseClothingItem, dirtyArrayIndex: number) {
        this.clothingItem = dirtyClothingItem;
        this.arrayIndex = dirtyArrayIndex;
        }
}