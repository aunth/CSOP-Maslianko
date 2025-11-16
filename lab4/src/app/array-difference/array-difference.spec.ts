import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayDifferenceComponent } from './array-difference';

describe('ArrayDifference', () => {
  let component: ArrayDifferenceComponent;
  let fixture: ComponentFixture<ArrayDifferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayDifferenceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArrayDifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
