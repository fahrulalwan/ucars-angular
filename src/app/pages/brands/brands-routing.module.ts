import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsContainerComponent } from './container/brands-container/brands-container.component';
import { BrandsDetailPageComponent } from './pages/brands-detail-page/brands-detail-page.component';
import { BrandsCreatePageComponent } from './pages/brands-create-page/brands-create-page.component';
import { BrandsListPageComponent } from './pages/brands-list-page/brands-list-page.component';
import {BrandsUpdatePageComponent} from "./pages/brands-update-page/brands-update-page.component";

const routes: Routes = [
  {
    path: '',
    component: BrandsContainerComponent,
    children: [
      {
        path: '',
        component: BrandsListPageComponent,
      },
      {
        path: 'create',
        component: BrandsCreatePageComponent,
      },
      {
        path: 'update/:id',
        component: BrandsUpdatePageComponent,
      },
      {
        path: ':id',
        component: BrandsDetailPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrandsRoutingModule {}
