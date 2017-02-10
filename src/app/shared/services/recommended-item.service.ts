import { Injectable } from '@angular/core';
import {ItemService} from "./item.service";
import {ItemDetailDto} from "../models/ItemDetailInterface";

@Injectable()
export class RecommendedItemService {

  constructor(private itemService:ItemService) {
  }

  getItems(item:ItemDetailDto){
    let result:ItemDetailDto[] = this.itemService.getAllItems(item.category);

    let index = result.indexOf(item, 0);
    if (index > -1) {
      result.splice(index, 1);
    }


    let demo = result.slice(0,3);
    debugger;
    return result.slice(0,3);
  }


}
