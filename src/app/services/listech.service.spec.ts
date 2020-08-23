import { TestBed } from '@angular/core/testing';

import { ListechService } from './listech.service';

describe('ListechService', () => {
  let service: ListechService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListechService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
