import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsCreatePageComponent } from './cars-create-page.component';

describe('BrandsCreateComponent', () => {
  let component: CarsCreatePageComponent;
  let fixture: ComponentFixture<CarsCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsCreatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
