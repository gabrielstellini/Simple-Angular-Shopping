import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";
import {ItemDetailInterface} from "../ItemDetailInterface";

@Component({
  selector: 'app-browse-item',
  templateUrl: './browse-item.component.html',
  styleUrls: ['./browse-item.component.scss']
})

export class BrowseItemComponent implements OnInit {

  @Input() itemDetails: ItemDetailInterface;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }


  changeURL(){
    this.router.navigate(["item",this.itemDetails.itemNum]);
  }


}
