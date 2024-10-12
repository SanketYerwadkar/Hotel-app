import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationFromComponent } from './reservation-from.component';

describe('ReservationFromComponent', () => {
  let component: ReservationFromComponent;
  let fixture: ComponentFixture<ReservationFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationFromComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
