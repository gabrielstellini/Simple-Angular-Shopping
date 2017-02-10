import {Component, OnInit, Input} from '@angular/core';
import {RecommendedItemService} from "../../../../shared/services/recommended-item.service";
import {ItemDetailDto} from "../../../../shared/models/ItemDetailInterface";

@Component({
  selector: 'app-item-recommendation',
  templateUrl: 'item-recommendation.component.html',
  styleUrls: ['item-recommendation.component.scss']
})
export class ItemRecommendationComponent implements OnInit {

  @Input() item:ItemDetailDto;
  items:ItemDetailDto[] = [];

  constructor(private recommendedItemService:RecommendedItemService) {
  }

  ngOnInit() {
    this.items = this.getItems();
  }

  getItems():ItemDetailDto[]{
    return this.recommendedItemService.getItems(this.item);
  }

}
