import {Component} from '@angular/core';

@Component({
  selector: 'app-cars-container',
  templateUrl: './cars-container.component.html',
  styleUrls: ['./cars-container.component.scss'],
  host: {
    class: 'block p-4'
  }
})
export class CarsContainerComponent {
}
