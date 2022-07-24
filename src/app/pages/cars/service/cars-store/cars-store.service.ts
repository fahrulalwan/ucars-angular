import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CarModel} from "../../shared/model/car.model";

@Injectable()
export class CarsStoreService {
  #loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  loading$ = this.#loadingSubject.asObservable();

  #carListSubject: BehaviorSubject<CarModel[]> = new BehaviorSubject<CarModel[]>([]);
  carList$ = this.#carListSubject.asObservable();

  set loading(value: boolean) {
    this.#loadingSubject.next(value);
  }

  get loading(): boolean {
    return this.#loadingSubject.value;
  }

  set carList(value: CarModel[]) {
    this.#carListSubject.next(value);
  }

  get carList(): CarModel[] {
    return this.#carListSubject.value;
  }
}
