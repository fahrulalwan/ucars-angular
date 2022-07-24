import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged, filter, Observable, startWith, Subscription, switchMap, tap,} from 'rxjs';
import {BrandsHttpService} from '../../service/brands-http/brands-http.service';
import {BrandPagingParamReqModel} from '../../shared/model/brand-paging-param-req.model';
import {BrandModel} from '../../shared/model/brand.model';
import {BrandsStoreService} from '../../service/brands-store/brands-store.service';
import {Dialog} from '@angular/cdk/dialog';
import {BrandDeleteDialogComponent} from '../../dialog/brand-delete-dialog/brand-delete-dialog.component';

@Component({
  selector: 'app-brands-list-page',
  templateUrl: './brands-list-page.component.html',
  styleUrls: ['./brands-list-page.component.scss'],
})
export class BrandsListPageComponent implements OnInit, OnDestroy {
  private readonly subs: Subscription[] = [];

  tableModel: BrandPagingParamReqModel = new BrandPagingParamReqModel();

  searchControl: FormControl<string> = this.fb.control('', {
    nonNullable: true,
  });

  loading$: Observable<boolean> = this.brandsStore.loading$;
  brands$: Observable<BrandModel[]> = this.brandsStore.brandList$;

  constructor(
    private fb: FormBuilder,
    private brandsHttpService: BrandsHttpService,
    private brandsStore: BrandsStoreService,
    private dialog: Dialog
  ) {
  }

  ngOnInit(): void {
    this.brandsStore.loading = true;
    this.listenSearchControlChanges();
  }

  listenSearchControlChanges(): void {
    const sub = this.searchControl.valueChanges
      .pipe(
        startWith(this.searchControl.defaultValue),
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => (this.tableModel.page = 1)),
        switchMap((value) => this.getBrands(value))
      )
      .subscribe((value) => {
        this.brandsStore.brandList = value;
      });

    this.subs.push(sub);
  }

  nextPage() {
    this.tableModel.page++;

    const sub = this.getBrands(this.searchControl.value).subscribe((value) => {
      this.brandsStore.brandList = this.brandsStore.brandList.concat(value);
    });

    this.subs.push(sub);
  }

  private getBrands(keywords: string): Observable<BrandModel[]> {
    this.tableModel.keywords = keywords;

    return this.brandsHttpService.getBrands(this.tableModel);
  }

  trackByBrandId(_index: number, brand: BrandModel) {
    return brand.id;
  }

  ngOnDestroy(): void {
    this.subs.forEach((each) => each.unsubscribe());
  }

  deleteBrand(brand: BrandModel) {
    const dialogRef = this.dialog.open(BrandDeleteDialogComponent, {
      width: '300px',
      data: brand,
    });

    const sub = dialogRef.closed
      .pipe(
        filter((value) => !!value),
        switchMap(() =>
          this.brandsHttpService
            .deleteBrand(brand.id)
            .pipe(switchMap(() => this.getBrands(this.searchControl.value)))
        )
      )
      .subscribe((result) => {
        this.brandsStore.brandList = result;
      });

    this.subs.push(sub);
  }
}
