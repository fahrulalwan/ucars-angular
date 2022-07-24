import {Component} from '@angular/core';
import {BrandsHttpService} from '../../service/brands-http/brands-http.service';
import {Observable, switchMap} from 'rxjs';
import {BrandModel} from '../../shared/model/brand.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-brands-detail-page',
  templateUrl: './brands-detail-page.component.html',
  styleUrls: ['./brands-detail-page.component.scss'],
})
export class BrandsDetailPageComponent {
  brandDetail$: Observable<BrandModel> = this.route.paramMap.pipe(
    switchMap(params => {
      const id = params.get('id');
      if (id) {
        return this.brandHttpService.getBrand(Number(id));
      }

      throw new Error('Brand id is required');
    })
  );

  constructor(
    private brandHttpService: BrandsHttpService,
    private route: ActivatedRoute,
  ) {
  }
}
