import { TestBed } from '@angular/core/testing';

import { LocalInfoAppService } from './local-info-app.service';

describe('LocalInfoAppService', () => {
  let service: LocalInfoAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalInfoAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
