import { Injectable } from '@angular/core';
import { Underwear } from '../Models/underwear';

@Injectable()
export class UnderwearService {
    allUnderwear: Underwear[] = [];

    addUnderwear(chonies: Underwear) {
        this.allUnderwear.push(chonies);
    }
}