import { TestBed } from '@angular/core/testing';

import { HardCodedAuthService } from './hard-coded-auth.service';

describe('HardCodedAuthService', () => {
  let service: HardCodedAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardCodedAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
