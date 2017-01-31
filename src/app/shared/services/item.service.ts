import { Injectable } from '@angular/core';
import {ItemDetailInterface} from "../ItemDetailInterface";


@Injectable()
export class ItemService {

  constructor() { }

  getItem(itemID:string):ItemDetailInterface{
    //TODO: DATABASE QUERY HERE

    let demoItem : ItemDetailInterface = {
      title: 'Misty night',
      author: 'Leonid Afremov',
      imgUrl: 'http://i.imgur.com/nlvE8LG.jpg',
      itemID: "123",
      price: 120,
      description: "MAMMA MIA this painting iz vonderful"
    }

    return demoItem;
  }
}
