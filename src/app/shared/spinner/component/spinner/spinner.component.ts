import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  @Input()
  spinnerSizeClass: string = 'w-8 h-8';

  @Input()
  spinnerText: string = '';
}
