import { TestBed } from '@angular/core/testing';

import { LugaresServiceService } from './lugares-service.service';

describe('LugaresServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LugaresServiceService = TestBed.get(LugaresServiceService);
    expect(service).toBeTruthy();
  });
});
