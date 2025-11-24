import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCalender } from './booking-calender';

describe('BookingCalender', () => {
  let component: BookingCalender;
  let fixture: ComponentFixture<BookingCalender>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingCalender]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingCalender);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
