import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsContainerComponent } from './brands-container.component';

describe('BrandContainerComponent', () => {
  let component: BrandsContainerComponent;
  let fixture: ComponentFixture<BrandsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
