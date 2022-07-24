import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarsContainerComponent} from "./container/cars-container/cars-container.component";
import {CarsListPageComponent} from "./pages/cars-list-page/cars-list-page.component";
import {CarsDetailPageComponent} from "./pages/cars-detail-page/cars-detail-page.component";
import {CarsCreatePageComponent} from "./pages/cars-create-page/cars-create-page.component";
import {CarsUpdatePageComponent} from "./pages/cars-update-page/cars-update-page.component";

const routes: Routes = [
  {
    path: ':id',
    component: CarsContainerComponent,
    children: [
      {
        path: '',
        component: CarsListPageComponent,
      },
      {
        path: 'create',
        component: CarsCreatePageComponent,
      },
      {
        path: 'update/:id',
        component: CarsUpdatePageComponent,
      },
      {
        path: ':id',
        component: CarsDetailPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarsRoutingModule {}
