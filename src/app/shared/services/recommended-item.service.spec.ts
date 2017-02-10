/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecommendedItemService } from './recommended-item.service';

describe('RecommendedItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecommendedItemService]
    });
  });

  it('should ...', inject([RecommendedItemService], (service: RecommendedItemService) => {
    expect(service).toBeTruthy();
  }));
});
