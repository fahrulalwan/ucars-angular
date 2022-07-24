import {Component, Inject} from '@angular/core';
import {DIALOG_DATA, DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-brand-delete-dialog',
  templateUrl: './brand-delete-dialog.component.html',
  styleUrls: ['./brand-delete-dialog.component.scss'],
  host: {
    class: 'block p-4 rounded-xl bg-white'
  }
})
export class BrandDeleteDialogComponent {

  constructor(public dialogRef: DialogRef<boolean>, @Inject(DIALOG_DATA) public data: Record<string, any>) {
  }
}
