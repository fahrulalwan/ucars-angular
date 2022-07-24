import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'brands',
    loadChildren: () => import('./pages/brands/brands.module').then(m => m.BrandsModule)
  },
  {
    path: 'cars',
    loadChildren: () => import('./pages/cars/cars.module').then(m => m.CarsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
