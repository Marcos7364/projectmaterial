import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-cdialogo',
  imports: [MatButtonModule],
  templateUrl: './cdialogo.html',
  styleUrl: './cdialogo.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Cdialogo {
  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}

@Component({
  selector: 'DialogElementsExampleDialog',
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  templateUrl: 'DialogElementsExampleDialog.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogElementsExampleDialog {}