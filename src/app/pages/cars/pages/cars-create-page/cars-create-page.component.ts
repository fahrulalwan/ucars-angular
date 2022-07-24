import {Component, OnDestroy, OnInit} from '@angular/core';
import {CarReqModel} from '../../shared/model/car-req.model';
import {map, Observable, Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {CarsHttpService} from '../../service/cars-http/cars-http.service';
import {CarsStoreService} from '../../service/cars-store/cars-store.service';
import {CarModel} from '../../shared/model/car.model';

@Component({
  selector: 'app-cars-create-page',
  templateUrl: './cars-create-page.component.html',
  styleUrls: ['./cars-create-page.component.scss'],
})
export class CarsCreatePageComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];

  carData$: Observable<CarModel> | undefined = this.route.parent?.paramMap.pipe(
    map((params) => {
      const brandId = params.get('id');

      if (brandId) {
        const model: CarModel = new CarModel();
        model.brandId = Number(brandId);

        return model;
      }

      throw new Error('Car id is required');
    })
  );

  constructor(
    private carsStoreService: CarsStoreService,
    private carHttpService: CarsHttpService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.carsStoreService.loading = false;
  }

  onSubmit($event: CarReqModel) {
    const sub = this.carHttpService.createCar($event).subscribe(() => {
      this.router.navigate(['/cars', $event.brandId]);
    });

    this.subs.push(sub);
  }

  ngOnDestroy(): void {
    this.subs.forEach((each) => each.unsubscribe());
  }
}
