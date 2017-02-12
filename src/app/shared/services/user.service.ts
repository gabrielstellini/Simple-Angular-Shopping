import { Injectable } from '@angular/core';
import {ItemService} from "./item.service";
import {AuthService} from "./auth.service";
import {ItemDetailDto} from "../models/ItemDetailInterface";

@Injectable()
export class UserService {

  constructor(private itemsService:ItemService,
  private authService: AuthService) {  }

  getHistory():ItemDetailDto[]{
    //TODO: replace with API call
    let results:ItemDetailDto[] = [];
    results.push(this.itemsService.getItem("1"));
    results.push(this.itemsService.getItem("2"));

    return results;
  }


}
