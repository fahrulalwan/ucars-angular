import {Component, OnDestroy, OnInit} from '@angular/core';
import {filter, Observable, Subscription, switchMap, tap} from 'rxjs';
import {CarsPagingParamReqModel} from '../../shared/model/cars-paging-param-req.model';
import {CarModel} from '../../shared/model/car.model';
import {Dialog} from '@angular/cdk/dialog';
import {CarsHttpService} from '../../service/cars-http/cars-http.service';
import {CarsStoreService} from '../../service/cars-store/cars-store.service';
import {CarDeleteDialogComponent} from '../../dialog/car-delete-dialog/car-delete-dialog.component';
import {ActivatedRoute} from '@angular/router';
import {BrandsHttpService} from "../../../brands/service/brands-http/brands-http.service";
import {BrandModel} from "../../../brands/shared/model/brand.model";

@Component({
  selector: 'app-cars-list-page',
  templateUrl: './cars-list-page.component.html',
  styleUrls: ['./cars-list-page.component.scss'],
})
export class CarsListPageComponent implements OnInit, OnDestroy {
  private readonly subs: Subscription[] = [];

  tableModel: CarsPagingParamReqModel = new CarsPagingParamReqModel();

  loading$: Observable<boolean> = this.carsStoreService.loading$;
  cars$: Observable<CarModel[]> = this.carsStoreService.carList$;

  brand$: Observable<BrandModel> = this.route.paramMap.pipe(
    switchMap(params => {
      const id = params.get('id');
      if (id) {
        return this.brandsHttpService.getBrand(Number(id));
      }

      throw new Error('Brand id is required');
    })
  );

  constructor(
    private route: ActivatedRoute,
    private carsHttpService: CarsHttpService,
    private carsStoreService: CarsStoreService,
    private brandsHttpService: BrandsHttpService,
    private dialog: Dialog
  ) {
  }

  ngOnInit(): void {
    this.carsStoreService.loading = true;

    this.fetchCars();
  }

  fetchCars(): void {
    const sub = this.route.paramMap
      .pipe(
        tap((param) => {
          const id = param.get('id');

          if (id) {
            this.tableModel.brandId = Number(id);
          }
        }),
        switchMap(() => this.getCars())
      )
      .subscribe((response) => (this.carsStoreService.carList = response));

    this.subs.push(sub);
  }

  nextPage() {
    this.tableModel.page++;

    const sub = this.getCars().subscribe((value) => {
      this.carsStoreService.carList =
        this.carsStoreService.carList.concat(value);
    });

    this.subs.push(sub);
  }

  private getCars(): Observable<CarModel[]> {
    return this.carsHttpService.getCars(this.tableModel);
  }

  trackByCarId(_index: number, car: CarModel) {
    return car.id;
  }

  ngOnDestroy(): void {
    this.subs.forEach((each) => each.unsubscribe());
  }

  deleteCar(car: CarModel) {
    const dialogRef = this.dialog.open(CarDeleteDialogComponent, {
      width: '300px',
      data: car,
    });

    const sub = dialogRef.closed
      .pipe(
        filter((value) => !!value),
        switchMap(() =>
          this.carsHttpService
            .deleteCar(car.id)
            .pipe(switchMap(() => this.getCars()))
        )
      )
      .subscribe((result) => {
        this.carsStoreService.carList = result;
      });

    this.subs.push(sub);
  }
}
