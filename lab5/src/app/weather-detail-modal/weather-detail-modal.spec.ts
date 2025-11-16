import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetailModal } from './weather-detail-modal';

describe('WeatherDetailModal', () => {
  let component: WeatherDetailModal;
  let fixture: ComponentFixture<WeatherDetailModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherDetailModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherDetailModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
