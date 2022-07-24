import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsDetailPageComponent } from './cars-detail-page.component';

describe('BrandsDetailComponent', () => {
  let component: CarsDetailPageComponent;
  let fixture: ComponentFixture<CarsDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
