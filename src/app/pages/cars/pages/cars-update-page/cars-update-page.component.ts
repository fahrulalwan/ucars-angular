import {Component, OnDestroy} from '@angular/core';
import {Observable, Subscription, switchMap} from "rxjs";
import {CarModel} from "../../shared/model/car.model";
import {ActivatedRoute, Router} from "@angular/router";
import {CarReqModel} from "../../shared/model/car-req.model";
import {CarsHttpService} from "../../service/cars-http/cars-http.service";

@Component({
  selector: 'app-cars-update-page',
  templateUrl: './cars-update-page.component.html',
  styleUrls: ['./cars-update-page.component.scss']
})
export class CarsUpdatePageComponent implements OnDestroy {
  private subs: Subscription[] = [];

  carDetail$: Observable<CarModel> | undefined = this.route.parent?.paramMap.pipe(
    switchMap(parentParams => {
      const brandId = parentParams.get('id');
      if (brandId) {
        return this.route.paramMap.pipe(
          switchMap(params => {
            const carId = params.get('id');

            if (carId) {
              return this.carsHttpService.getCar(Number(carId));
            }

            throw new Error('Car id is required');
          })
        );
      }

      throw new Error('Brand id is required');
    })
  );

  constructor(
    private carsHttpService: CarsHttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  onSubmit($event: CarReqModel) {
    const sub = this.carsHttpService.updateCar($event).subscribe(() => {
      this.router.navigate(['/cars', $event.brandId]);
    });

    this.subs.push(sub);
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
