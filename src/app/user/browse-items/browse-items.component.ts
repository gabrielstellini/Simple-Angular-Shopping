import { Component, OnInit } from '@angular/core';
import {ItemDetailInterface} from "../../shared/ItemDetailInterface";

@Component({
  selector: 'app-browse-items',
  templateUrl: './browse-items.component.html',
  styleUrls: ['./browse-items.component.scss']
})
export class BrowseItemsComponent implements OnInit {

  itemDetailArr: ItemDetailInterface[]= [];

  constructor(){
    this.getItems();
  }

  ngOnInit(){
  }

  getItems(){
    let itemDetailInterfaceInstance: ItemDetailInterface = <ItemDetailInterface> {
      title: 'Misty night',
      author: 'Leonid Afremov',
      imgUrl: 'http://i.imgur.com/nlvE8LG.jpg',
      itemNum: 123
    }

    //http://stackoverflow.com/questions/12803604/javascript-array-concat-not-working-why
    this.itemDetailArr = this.itemDetailArr.concat([itemDetailInterfaceInstance,itemDetailInterfaceInstance,itemDetailInterfaceInstance]);
  }
}
