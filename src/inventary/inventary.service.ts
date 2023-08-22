import { Injectable } from '@nestjs/common';
const URL='http://localhost:3030/inventary';
import { Inventary } from './inventary.interface';

@Injectable()
export class InventaryService {
    async getInventary(): Promise<Inventary[]>{
        const res = await fetch (URL);
        const parsed = await res.json();
        return parsed;

    }
    async getInventaryById(id:number):Promise<Inventary>{
        const res =await fetch(URL + id);
        const parsed =await res.json();
        return parsed;
    }
    
}
