import { TestBed } from '@angular/core/testing';

import { VhfService } from './vhf.service';

describe('VhfService', () => {
  let service: VhfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VhfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
