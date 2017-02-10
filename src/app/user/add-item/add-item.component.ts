import { Component, OnInit } from '@angular/core';
import {ItemDetailDto} from "../../shared/models/ItemDetailInterface";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  itemDetail:ItemDetailDto =
    {
    title: "",
    author: "",
    imgUrl: '',
    itemID: "",
    price: undefined,
    description: "",
    category: undefined
  };

  constructor() { }

  ngOnInit() {
  }

  attemptAdd(){
    // this.itemDetail
    //  TODO: ADD validation
    // TODO: ADD add service which sends new item to database
  }

}
