import { Injectable } from '@angular/core';
import {ItemDetailDto} from "../models/ItemDetailInterface";

@Injectable()
export class ItemService {
  private items :Array<ItemDetailDto> = [ {
    title: 'Misty night',
    author: 'Leonid Afremov',
    imgUrl: 'http://i.imgur.com/nlvE8LG.jpg',
    itemID: "1",
    price: 120,
    description: "MAMMA MIA this painting iz vonderful",
    category: 'oil'
  },
    {
      title: 'Misty night',
      author: 'Leonid Afremov',
      imgUrl: 'http://i.imgur.com/nlvE8LG.jpg',
      itemID: "2",
      price: 22,
      description: "MAMMA MIA this painting iz vonderful",
      category: 'oil'
    },
    {
      title: 'Misty night',
      author: 'Leonid Afremov',
      imgUrl: 'http://i.imgur.com/nlvE8LG.jpg',
      itemID: "3",
      price: 55,
      description: "MAMMA MIA this painting iz vonderful",
      category: 'oil'
    },
  ];

  constructor() { }

  getItem(itemID:string):ItemDetailDto{
    //TODO: DATABASE QUERY HERE

    return this.items.find(item => item.itemID === itemID);
  }

  getAllItems(category?:string):ItemDetailDto[]{
    return this.items.filter(item => item.category === category);
  }
}
