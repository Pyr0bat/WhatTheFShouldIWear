import { Injectable } from '@angular/core';
import { Sock } from '../Models/sock';

@Injectable()
export class SockService {
    allSocks: Sock[] = [];

    addSocks(socks: Sock) {
        this.allSocks.push(socks);
    }
}