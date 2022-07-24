import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {BrandModel} from "../../shared/model/brand.model";

@Injectable()
export class BrandsStoreService {
  #loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  loading$ = this.#loadingSubject.asObservable();

  #brandListSubject: BehaviorSubject<BrandModel[]> = new BehaviorSubject<BrandModel[]>([]);
  brandList$ = this.#brandListSubject.asObservable();

  set loading(value: boolean) {
    this.#loadingSubject.next(value);
  }

  get loading(): boolean {
    return this.#loadingSubject.value;
  }

  set brandList(value: BrandModel[]) {
    this.#brandListSubject.next(value);
  }

  get brandList(): BrandModel[] {
    return this.#brandListSubject.value;
  }
}
