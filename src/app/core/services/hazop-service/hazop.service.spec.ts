import { TestBed } from '@angular/core/testing';

import { HazopService } from './hazop.service';

describe('HazopService', () => {
  let service: HazopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HazopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
