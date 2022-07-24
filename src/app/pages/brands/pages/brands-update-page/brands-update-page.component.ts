import {Component, OnDestroy} from '@angular/core';
import {Observable, Subscription, switchMap} from 'rxjs';
import {BrandModel} from '../../shared/model/brand.model';
import {BrandsHttpService} from '../../service/brands-http/brands-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BrandReqModel} from "../../shared/model/brand-req.model";

@Component({
  selector: 'app-brands-update-page',
  templateUrl: './brands-update-page.component.html',
  styleUrls: ['./brands-update-page.component.scss'],
})
export class BrandsUpdatePageComponent implements OnDestroy {
  private subs: Subscription[] = [];

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
    private router: Router
  ) {
  }

  onSubmit($event: BrandReqModel) {
    console.log('onsubmit detail', $event);
    const sub = this.brandHttpService.updateBrand($event).subscribe(() => {
      this.router.navigate(['/brands']);
    });

    this.subs.push(sub);
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
