import {Component, inject} from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-bottom-sheet',
  imports: [MatButtonModule, MatBottomSheetModule],
  templateUrl: './bottom-sheet.html',
  styleUrl: './bottom-sheet.css'
})
export class BottomSheetOverviewExample {
  private bottomSheet = inject(MatBottomSheet);

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetOverviewExample);
  }

}

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.html',
  styleUrl: './bottom-sheet.css',
  imports: [MatListModule],
})
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet() {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
}
