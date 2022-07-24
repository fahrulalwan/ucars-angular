import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsUpdatePageComponent } from './cars-update-page.component';

describe('CarsUpdatePageComponent', () => {
  let component: CarsUpdatePageComponent;
  let fixture: ComponentFixture<CarsUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsUpdatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
