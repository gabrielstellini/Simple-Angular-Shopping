import {Component, OnInit, OnChanges} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from "@angular/router";
import {ItemService} from "../../../shared/services/item.service";
import {ItemDetailDto} from "../../../shared/models/ItemDetailInterface";
import {CartService} from "../../../shared/services/cart.service";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  itemID:string;
  itemDetails: ItemDetailDto;

  constructor(private activatedRoute: ActivatedRoute,
              private itemService:ItemService,
              private cartService: CartService,
              private router: Router) {

    router.events.subscribe((val) => {
      this.refreshData();
    });

  }

  ngOnInit() {
    this.refreshData();
  }

  refreshData(){

    debugger;

    this.activatedRoute.params.subscribe(param => {
      this.itemID = param['id'];
    });

    this.itemDetails = this.itemService.getItem(this.itemID);
  }

  addToCart(){
    this.cartService.addToCart(this.itemID);
    console.log(this.cartService.findAll());
  }

}
