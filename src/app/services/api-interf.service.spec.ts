import { TestBed } from '@angular/core/testing';

import { ApiInterfService } from './api-interf.service';

describe('ApiInterfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiInterfService = TestBed.get(ApiInterfService);
    expect(service).toBeTruthy();
  });
});
