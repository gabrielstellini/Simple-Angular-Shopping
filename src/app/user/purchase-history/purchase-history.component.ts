import { Component, OnInit } from '@angular/core';
import {ItemDetailDto} from "../../shared/models/ItemDetailInterface";
import {ActivatedRoute} from "@angular/router";
import {ItemService} from "../../shared/services/item.service";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.scss']
})
export class PurchaseHistoryComponent implements OnInit {

  itemDetailArr: ItemDetailDto[]= [];

  constructor(
    private userService:UserService){}

  ngOnInit(){
      this.itemDetailArr = this.getItems();
  }

  getItems():ItemDetailDto[]{
    return this.userService.getHistory();
  }

}
