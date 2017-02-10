import { Component, OnInit } from '@angular/core';
import {CardDetailInterface} from "../../shared/models/CardDetailInterface";

@Component({
  selector: 'app-credit-card-screen',
  templateUrl: './credit-card-screen.component.html',
  styleUrls: ['./credit-card-screen.component.scss']
})
export class CreditCardScreenComponent implements OnInit {

  cardDetails:CardDetailInterface = {
    gender:undefined,
    cardName: "",
    cardNumber: undefined,
    date:undefined,
    cvv:undefined,
    country:""
  };

  constructor() { }

  ngOnInit() {
  }

  attemptCheckout(){
    //TODO: NOTIFY CUSTOMER HERE
    //TODO: NOTIFY DATABASE HERE
  }

}
