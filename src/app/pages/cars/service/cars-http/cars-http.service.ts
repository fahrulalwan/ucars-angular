import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map, Observable, tap} from 'rxjs';
import {CarModel} from '../../shared/model/car.model';
import {CarReqModel} from '../../shared/model/car-req.model';
import {environment} from '../../../../../environments/environment';
import {CarsPagingParamReqModel} from '../../shared/model/cars-paging-param-req.model';
import {CarsStoreService} from "../cars-store/cars-store.service";

@Injectable()
export class CarsHttpService {
  private static readonly URL = environment.apiUrl + '/cars';

  constructor(
    private http: HttpClient,
    private carsStoreService: CarsStoreService
  ) {
  }

  getCars(param: CarsPagingParamReqModel): Observable<CarModel[]> {
    this.carsStoreService.loading = true;

    return this.http
      .get<CarModel[]>(CarsHttpService.URL, {
        params: new HttpParams({
          fromObject: param.convert(),
        }),
      })
      .pipe(
        map((response) =>
          response.map((each) => new CarModel().convert(each))
        ),
        tap({
          next: () => (this.carsStoreService.loading = false),
          error: () => (this.carsStoreService.loading = false),
        })
      );
  }

  getCar(carId: number): Observable<CarModel> {
    this.carsStoreService.loading = true;

    const url = CarsHttpService.URL + '/' + carId.toString();

    return this.http.get<CarModel>(url).pipe(
      map((response) => new CarModel().convert(response)),
      tap({
        next: () => (this.carsStoreService.loading = false),
        error: () => (this.carsStoreService.loading = false),
      })
    );
  }

  createCar(model: CarReqModel): Observable<CarModel> {
    this.carsStoreService.loading = true;

    return this.http
      .post<CarModel>(CarsHttpService.URL, model.convert())
      .pipe(
        map((response) => new CarModel().convert(response)),
        tap({
          next: () => (this.carsStoreService.loading = false),
          error: () => (this.carsStoreService.loading = false),
        })
      );
  }

  updateCar(model: CarReqModel): Observable<CarModel> {
    this.carsStoreService.loading = true;

    return this.http
      .put<CarModel>(CarsHttpService.URL, model.convert())
      .pipe(
        map((response) => new CarModel().convert(response)),
        tap({
          next: () => (this.carsStoreService.loading = false),
          error: () => (this.carsStoreService.loading = false),
        })
      );
  }

  deleteCar(carId: number): Observable<CarModel> {
    this.carsStoreService.loading = true;

    const url = CarsHttpService.URL + '/' + carId.toString();

    return this.http.delete<CarModel>(url).pipe(
      map((response) => new CarModel().convert(response)),
      tap({
        next: () => (this.carsStoreService.loading = false),
        error: () => (this.carsStoreService.loading = false),
      })
    );
  }
}
