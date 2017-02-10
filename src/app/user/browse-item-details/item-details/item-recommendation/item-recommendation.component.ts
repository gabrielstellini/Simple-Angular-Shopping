import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {RecommendedItemService} from "../../../../shared/services/recommended-item.service";
import {ItemDetailDto} from "../../../../shared/models/ItemDetailInterface";

@Component({
  selector: 'app-item-recommendation',
  templateUrl: 'item-recommendation.component.html',
  styleUrls: ['item-recommendation.component.scss']
})
export class ItemRecommendationComponent implements OnChanges {

  @Input() item:ItemDetailDto;
  items:ItemDetailDto[] = [];

  constructor(private recommendedItemService:RecommendedItemService) {
  }

  ngOnChanges() {
    this.items = this.getItems();
  }

  getItems():ItemDetailDto[]{
    return this.recommendedItemService.getItems(this.item);
  }

}
