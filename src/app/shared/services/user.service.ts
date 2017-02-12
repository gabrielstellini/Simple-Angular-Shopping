import { Injectable } from '@angular/core';
import {ItemService} from "./item.service";
import {AuthService} from "./auth.service";

@Injectable()
export class UserService {

  constructor(itemsService:ItemService,
  authService: AuthService) { }

}
