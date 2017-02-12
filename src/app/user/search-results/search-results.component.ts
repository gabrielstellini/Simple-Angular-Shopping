import { Component, OnInit } from '@angular/core';
import {ItemDetailDto} from "../../shared/models/ItemDetailInterface";
import {ItemService} from "../../shared/services/item.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  searchString:string = "";
  itemDetailArr: ItemDetailDto[]= [];

  constructor(
    private itemService:ItemService,
    private activatedRoute : ActivatedRoute){

    activatedRoute.params.subscribe(param => {
      this.searchString = param['searchQuery'];
      this.itemDetailArr = this.getItems();
    });
  }

  ngOnInit(){
  }

  getItems():ItemDetailDto[]{
    return this.itemService.findAll(this.searchString);
  }
}
