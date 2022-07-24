import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsUpdatePageComponent } from './brands-update-page.component';

describe('BrandsUpdatePageComponent', () => {
  let component: BrandsUpdatePageComponent;
  let fixture: ComponentFixture<BrandsUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsUpdatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
