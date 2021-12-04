import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigParkingComponent } from './config-parking.component';

describe('ConfigParkingComponent', () => {
  let component: ConfigParkingComponent;
  let fixture: ComponentFixture<ConfigParkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigParkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
