import { Component, OnInit } from '@angular/core';
import {ItemDetailDto} from "../../shared/models/ItemDetailInterface";
import {ActivatedRoute} from "@angular/router";
import {ItemService} from "../../shared/services/item.service";

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.scss']
})
export class PurchaseHistoryComponent implements OnInit {

  searchString:string = "";
  itemDetailArr: ItemDetailDto[]= [];

  constructor(
    private itemService:ItemService){

  }


  ngOnInit(){
  }

  getItems():ItemDetailDto[]{
    return this.itemService.findAll(this.searchString);
  }

}
