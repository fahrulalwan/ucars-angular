import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsListPageComponent } from './brands-list-page.component';

describe('BrandsPageComponent', () => {
  let component: BrandsListPageComponent;
  let fixture: ComponentFixture<BrandsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
