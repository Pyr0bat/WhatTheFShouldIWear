import { Injectable } from '@angular/core';
import { Pant } from '../Models/pant';

@Injectable()
export class PantsService {
    allPants: Pant[] = [];

    addPants(pants: Pant) {
        this.allPants.push(pants);
    }
}