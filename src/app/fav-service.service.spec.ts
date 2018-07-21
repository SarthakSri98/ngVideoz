import { TestBed, inject } from '@angular/core/testing';

import { FavServiceService } from './fav-service.service';

describe('FavServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavServiceService]
    });
  });

  it('should be created', inject([FavServiceService], (service: FavServiceService) => {
    expect(service).toBeTruthy();
  }));
});
