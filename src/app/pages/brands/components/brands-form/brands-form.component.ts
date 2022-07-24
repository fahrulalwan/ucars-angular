import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BrandModel} from '../../shared/model/brand.model';
import {BrandReqModel} from '../../shared/model/brand-req.model';
import {BrandsStoreService} from '../../service/brands-store/brands-store.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-brands-form',
  templateUrl: './brands-form.component.html',
  styleUrls: ['./brands-form.component.scss'],
})
export class BrandsFormComponent {
  isLoading: Observable<boolean> = this.brandStoreService.loading$;

  form: FormGroup = this.fb.group({
    name: this.fb.control('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    description: this.fb.control('', {
      validators: Validators.required,
    }),
    brandLogo: this.fb.control('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  private _data: BrandModel = new BrandModel();

  @Input()
  set data(value: BrandModel) {
    this.form.patchValue(value);
    this._data = value;
  }

  get data() {
    return this._data;
  }

  @Input()
  set disabled(value: boolean) {
    if (value) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  @Output()
  private submitChange: EventEmitter<BrandReqModel> = new EventEmitter<BrandReqModel>();

  get name() {
    return this.form.get('name');
  }

  get description() {
    return this.form.get('description');
  }

  get brandLogo() {
    return this.form.get('brandLogo');
  }

  constructor(
    private fb: FormBuilder,
    private brandStoreService: BrandsStoreService
  ) {
  }

  onSubmit(): void {
    console.log(this.form.value);

    if (this.form.valid) {
      console.log('Form is valid');
      const model = new BrandReqModel().clone({
        ...this.data,
        ...this.form.value,
      });

      this.submitChange.emit(model);
    } else {
      console.log('Form is invalid');
      this.form.markAllAsTouched();
    }
  }
}
