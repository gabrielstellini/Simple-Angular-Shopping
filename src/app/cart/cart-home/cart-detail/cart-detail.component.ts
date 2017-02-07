import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit {

  @Input() totalCost;

  constructor() { }

  ngOnInit() {
  }

}
