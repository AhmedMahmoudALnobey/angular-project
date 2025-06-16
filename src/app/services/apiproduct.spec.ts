import { TestBed } from '@angular/core/testing';

import { APIproduct } from './apiproduct';

describe('APIproduct', () => {
  let service: APIproduct;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIproduct);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
