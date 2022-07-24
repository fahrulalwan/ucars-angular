import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsCreatePageComponent } from './brands-create-page.component';

describe('BrandsCreateComponent', () => {
  let component: BrandsCreatePageComponent;
  let fixture: ComponentFixture<BrandsCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsCreatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
