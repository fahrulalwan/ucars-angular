import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrandsContainerComponent} from './container/brands-container/brands-container.component';
import {BrandsRoutingModule} from './brands-routing.module';
import {BrandsListPageComponent} from './pages/brands-list-page/brands-list-page.component';
import {BrandsDetailPageComponent} from './pages/brands-detail-page/brands-detail-page.component';
import {BrandsCreatePageComponent} from './pages/brands-create-page/brands-create-page.component';
import {BrandsHttpService} from './service/brands-http/brands-http.service';
import {BrandsStoreService} from './service/brands-store/brands-store.service';
import {SpinnerModule} from '../../shared/spinner/spinner.module';
import {ReactiveFormsModule} from '@angular/forms';
import {BrandsFormComponent} from './components/brands-form/brands-form.component';
import {BrandsUpdatePageComponent} from './pages/brands-update-page/brands-update-page.component';
import {BrandDeleteDialogComponent} from './dialog/brand-delete-dialog/brand-delete-dialog.component';
import {DialogModule} from "@angular/cdk/dialog";

@NgModule({
  declarations: [
    BrandsContainerComponent,
    BrandsListPageComponent,
    BrandsDetailPageComponent,
    BrandsCreatePageComponent,
    BrandsFormComponent,
    BrandsUpdatePageComponent,
    BrandDeleteDialogComponent,
  ],
  providers: [BrandsHttpService, BrandsStoreService],
  imports: [
    CommonModule,
    BrandsRoutingModule,
    SpinnerModule,
    ReactiveFormsModule,
    DialogModule
  ],
  exports: [
    BrandsFormComponent
  ]
})
export class BrandsModule {
}
