import { TestBed, inject } from '@angular/core/testing';

import { MusicServiceService } from './music-service.service';

describe('MusicServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicServiceService]
    });
  });

  it('should be created', inject([MusicServiceService], (service: MusicServiceService) => {
    expect(service).toBeTruthy();
  }));
});
