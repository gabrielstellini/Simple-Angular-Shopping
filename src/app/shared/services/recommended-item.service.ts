import { Injectable } from '@angular/core';
import {ItemService} from "./item.service";
import {ItemDetailDto} from "../models/ItemDetailInterface";

@Injectable()
export class RecommendedItemService {

  constructor(private itemService:ItemService) {
  }

  getItems(item:ItemDetailDto){

    return this.itemService
      .getAllItems(item.category)
      .filter( (currentItem, index) => currentItem.itemID !== item.itemID && index < 3);

  }


}
