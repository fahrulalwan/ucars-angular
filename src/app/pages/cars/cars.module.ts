import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarsRoutingModule} from './cars-routing.module';
import {SpinnerModule} from '../../shared/spinner/spinner.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DialogModule} from '@angular/cdk/dialog';
import {CarsContainerComponent} from './container/cars-container/cars-container.component';
import {CarsFormComponent} from './components/cars-form/cars-form.component';
import {CarsListPageComponent} from './pages/cars-list-page/cars-list-page.component';
import {CarsDetailPageComponent} from './pages/cars-detail-page/cars-detail-page.component';
import {CarsCreatePageComponent} from './pages/cars-create-page/cars-create-page.component';
import {CarsUpdatePageComponent} from './pages/cars-update-page/cars-update-page.component';
import {CarDeleteDialogComponent} from './dialog/car-delete-dialog/car-delete-dialog.component';
import {CarsStoreService} from './service/cars-store/cars-store.service';
import {CarsHttpService} from './service/cars-http/cars-http.service';
import {BrandsHttpService} from '../brands/service/brands-http/brands-http.service';
import {BrandsStoreService} from '../brands/service/brands-store/brands-store.service';

@NgModule({
  declarations: [
    CarsContainerComponent,
    CarsListPageComponent,
    CarsDetailPageComponent,
    CarsCreatePageComponent,
    CarsFormComponent,
    CarsUpdatePageComponent,
    CarDeleteDialogComponent,
  ],
  providers: [
    CarsHttpService,
    CarsStoreService,
    BrandsHttpService,
    BrandsStoreService,
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    SpinnerModule,
    ReactiveFormsModule,
    DialogModule,
  ],
})
export class CarsModule {
}
