import { TestBed } from '@angular/core/testing';

import { RoomServices } from './room-services';

describe('RoomServices', () => {
  let service: RoomServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
