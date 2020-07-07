import { Component } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { BottomSheetOverviewExampleSheetComponent } from './bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component';
import { BottomSheetOverviewExampleSheetp1Component } from './bottom-sheet-overview-example-sheetp1/bottom-sheet-overview-example-sheetp1.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webApp1';
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheetComponent);
  }
  openBottomSheet1(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheetp1Component);
  }
  
 
}
