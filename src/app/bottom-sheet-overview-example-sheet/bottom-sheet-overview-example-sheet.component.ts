import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {FormControl, Validators} from '@angular/forms';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-bottom-sheet-overview-example-sheet',
  templateUrl: './bottom-sheet-overview-example-sheet.component.html',
  styleUrls: ['./bottom-sheet-overview-example-sheet.component.css']
})
export class BottomSheetOverviewExampleSheetComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheetComponent>,private _formBuilder: FormBuilder) {}


  meth(): void {
    this._bottomSheetRef.dismiss(BottomSheetOverviewExampleSheetComponent);
  }
   
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    


  }

}
