import { TestBed } from '@angular/core/testing';

import { GetItemService } from './get-item.service';

describe('GetItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetItemService = TestBed.get(GetItemService);
    expect(service).toBeTruthy();
  });
});
