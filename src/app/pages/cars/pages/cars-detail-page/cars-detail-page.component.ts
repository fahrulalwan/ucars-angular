import {Component} from '@angular/core';
import {Observable, switchMap} from 'rxjs';
import {CarModel} from '../../shared/model/car.model';
import {ActivatedRoute} from '@angular/router';
import {CarsHttpService} from '../../service/cars-http/cars-http.service';

@Component({
  selector: 'app-cars-detail-page',
  templateUrl: './cars-detail-page.component.html',
  styleUrls: ['./cars-detail-page.component.scss'],
})
export class CarsDetailPageComponent {
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
    private route: ActivatedRoute
  ) {
  }
}
