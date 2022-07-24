import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map, Observable, tap} from 'rxjs';
import {BrandModel} from '../../shared/model/brand.model';
import {BrandReqModel} from '../../shared/model/brand-req.model';
import {BrandsStoreService} from '../brands-store/brands-store.service';
import {environment} from '../../../../../environments/environment';
import {BrandPagingParamReqModel} from '../../shared/model/brand-paging-param-req.model';

@Injectable()
export class BrandsHttpService {
  private static readonly URL = environment.apiUrl + '/brands';

  constructor(
    private http: HttpClient,
    private brandsStoreService: BrandsStoreService
  ) {
  }

  getBrands(param: BrandPagingParamReqModel): Observable<BrandModel[]> {
    this.brandsStoreService.loading = true;

    return this.http
      .get<BrandModel[]>(BrandsHttpService.URL, {
        params: new HttpParams({
          fromObject: param.convert(),
        }),
      })
      .pipe(
        map((response) =>
          response.map((each) => new BrandModel().convert(each))
        ),
        tap({
          next: () => (this.brandsStoreService.loading = false),
          error: () => (this.brandsStoreService.loading = false),
        })
      );
  }

  getBrand(brandId: number): Observable<BrandModel> {
    this.brandsStoreService.loading = true;

    const url = BrandsHttpService.URL + '/' + brandId.toString();

    return this.http.get<BrandModel>(url).pipe(
      map((response) => new BrandModel().convert(response)),
      tap({
        next: () => (this.brandsStoreService.loading = false),
        error: () => (this.brandsStoreService.loading = false),
      })
    );
  }

  createBrand(model: BrandReqModel): Observable<BrandModel> {
    this.brandsStoreService.loading = true;

    return this.http
      .post<BrandModel>(BrandsHttpService.URL, model.convert())
      .pipe(
        map((response) => new BrandModel().convert(response)),
        tap({
          next: () => (this.brandsStoreService.loading = false),
          error: () => (this.brandsStoreService.loading = false),
        })
      );
  }

  updateBrand(model: BrandReqModel): Observable<BrandModel> {
    this.brandsStoreService.loading = true;

    return this.http
      .put<BrandModel>(BrandsHttpService.URL, model.convert())
      .pipe(
        map((response) => new BrandModel().convert(response)),
        tap({
          next: () => (this.brandsStoreService.loading = false),
          error: () => (this.brandsStoreService.loading = false),
        })
      );
  }

  deleteBrand(brandId: number): Observable<BrandModel> {
    this.brandsStoreService.loading = true;

    const url = BrandsHttpService.URL + '/' + brandId.toString();

    return this.http.delete<BrandModel>(url).pipe(
      map((response) => new BrandModel().convert(response)),
      tap({
        next: () => (this.brandsStoreService.loading = false),
        error: () => (this.brandsStoreService.loading = false),
      })
    );
  }
}
