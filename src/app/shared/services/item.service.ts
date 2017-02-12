import { Injectable } from '@angular/core';
import {ItemDetailDto} from "../models/ItemDetailInterface";

@Injectable()
export class ItemService {
  private items :Array<ItemDetailDto> = [
    {
      title: 'Misty night',
      artist: 'Leonid Afremov',
      imgUrl: 'http://i.imgur.com/nlvE8LG.jpg',
      itemID: "1",
      price: 120,
      description: "Impressionistic art piece on canvas, using only a palette knife",
      category: 'oil',
      size:undefined

    },
    {
      title: 'Misty night',
      artist: 'Leonid Afremov',
      imgUrl: 'http://i.imgur.com/nlvE8LG.jpg',
      itemID: "2",
      price: 22,
      description: "Impressionistic art piece on canvas, using only a palette knife",
      category: 'oil',
      size:undefined
    },
    {
      title: 'Misty night',
      artist: 'Leonid Afremov',
      imgUrl: 'http://i.imgur.com/nlvE8LG.jpg',
      itemID: "3",
      price: 55,
      description: "Impressionistic art piece on canvas, using only a palette knife",
      category: 'oil',
      size:undefined
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

  getItemsByID(itemIDs:string[]):ItemDetailDto[]{
    //TODO: DATABASE QUERY HERE

    let result:ItemDetailDto[] = [];
    for(let i=0;i<itemIDs.length;i++){
      result.push(this.items.find(item => item.itemID === itemIDs[i]));
    }
    return result;
  }

  findAll(searchQuery:string):ItemDetailDto[]{
    //TODO: DATABASE QUERY HERE
    let result:ItemDetailDto[] = [];
    this.items.map(item =>{result.push(item)});
    this.items.map(item =>{result.push(item)});
    this.items.map(item =>{result.push(item)});
    return result;
  }
}
