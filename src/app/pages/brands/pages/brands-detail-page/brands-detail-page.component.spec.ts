import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsDetailPageComponent } from './brands-detail-page.component';

describe('BrandsDetailComponent', () => {
  let component: BrandsDetailPageComponent;
  let fixture: ComponentFixture<BrandsDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
