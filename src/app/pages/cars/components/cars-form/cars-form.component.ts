import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CarModel} from '../../shared/model/car.model';
import {CarReqModel} from '../../shared/model/car-req.model';
import {Observable} from 'rxjs';
import {CarsStoreService} from "../../service/cars-store/cars-store.service";

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.scss'],
})
export class CarsFormComponent {
  isLoading: Observable<boolean> = this.carsStoreService.loading$;

  form: FormGroup = this.fb.group({
    name: this.fb.control('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    description: this.fb.control('', {
      validators: Validators.required,
    }),
  });

  private _data: CarModel = new CarModel();

  @Input()
  set data(value: CarModel) {
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
  private submitChange: EventEmitter<CarReqModel> = new EventEmitter<CarReqModel>();

  get name() {
    return this.form.get('name');
  }

  get description() {
    return this.form.get('description');
  }

  constructor(
    private fb: FormBuilder,
    private carsStoreService: CarsStoreService
  ) {
  }

  onSubmit(): void {
    if (this.form.valid) {
      const model = new CarReqModel().clone({
        ...this.data,
        ...this.form.value,
      });

      this.submitChange.emit(model);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
