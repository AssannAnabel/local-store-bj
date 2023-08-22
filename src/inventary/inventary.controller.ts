import { Controller,Get,Param } from '@nestjs/common';
import { InventaryService } from './inventary.service';
import {Inventary} from './inventary.interface';

@Controller('inventary')
export class InventaryController {
    constructor(private readonly inventaryService:InventaryService){}
        @Get()
        getInventary(): Promise<Inventary[]>{
            return this.inventaryService.getInventary();
        }
        @Get(':id')
        getInventaryById(@Param('id')id:number): Promise<Inventary>{
            return this.inventaryService.getInventaryById(id)
        }
    }



