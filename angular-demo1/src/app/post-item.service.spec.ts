import { TestBed } from '@angular/core/testing';

import { PostItemService } from './post-item.service';

describe('PostItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostItemService = TestBed.get(PostItemService);
    expect(service).toBeTruthy();
  });
});
