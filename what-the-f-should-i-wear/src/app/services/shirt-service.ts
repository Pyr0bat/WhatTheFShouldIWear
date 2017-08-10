import { Injectable } from '@angular/core';
import { TShirt } from '../Models/t-shirt';

@Injectable()
export class ShirtService {
    allShirts: TShirt[] = [];
    
    addShirt(shirt:TShirt) {
        this.allShirts.push(shirt);
    }
}