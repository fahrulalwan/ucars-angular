import {Component, OnDestroy, OnInit} from '@angular/core';
import {BrandReqModel} from '../../shared/model/brand-req.model';
import {BrandsHttpService} from '../../service/brands-http/brands-http.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {BrandsStoreService} from "../../service/brands-store/brands-store.service";

@Component({
  selector: 'app-brands-create-page',
  templateUrl: './brands-create-page.component.html',
  styleUrls: ['./brands-create-page.component.scss'],
})
export class BrandsCreatePageComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];

  constructor(private brandStoreService: BrandsStoreService, private brandHttpService: BrandsHttpService, private router: Router) {
  }

  ngOnInit(): void {
    this.brandStoreService.loading = false;
  }

  onSubmit($event: BrandReqModel) {
    const sub = this.brandHttpService.createBrand($event).subscribe(() => {
      this.router.navigate(['/brands']);
    });

    this.subs.push(sub);
  }

  ngOnDestroy(): void {
    this.subs.forEach((each) => each.unsubscribe());
  }
}
