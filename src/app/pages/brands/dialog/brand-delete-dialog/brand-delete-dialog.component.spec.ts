import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandDeleteDialogComponent } from './brand-delete-dialog.component';

describe('DeleteDialogComponent', () => {
  let component: BrandDeleteDialogComponent;
  let fixture: ComponentFixture<BrandDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
