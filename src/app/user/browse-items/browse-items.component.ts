import { Component, OnInit } from '@angular/core';
import {ItemDetailDto} from "../../shared/models/ItemDetailInterface";
import {ItemService} from "../../shared/services/item.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-browse-items',
  templateUrl: './browse-items.component.html',
  styleUrls: ['./browse-items.component.scss']
})
export class BrowseItemsComponent implements OnInit {

  category:string;
  itemDetailArr: ItemDetailDto[]= [];

  constructor(
    private itemService:ItemService,
    private activatedRoute : ActivatedRoute){

    activatedRoute.params.subscribe(param => {
      this.category = param['category'];
      this.getItems();
    });
  }

  ngOnInit(){
  }

  getItems(){
    this.itemDetailArr = this.itemService.getAllItems(this.category);
  }
}
