import {Component, Inject} from '@angular/core';
import {DIALOG_DATA, DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-cars-delete-dialog',
  templateUrl: './car-delete-dialog.component.html',
  styleUrls: ['./car-delete-dialog.component.scss'],
  host: {
    class: 'block p-4 rounded-xl bg-white'
  }
})
export class CarDeleteDialogComponent {

  constructor(public dialogRef: DialogRef<boolean>, @Inject(DIALOG_DATA) public data: Record<string, any>) {
  }
}
