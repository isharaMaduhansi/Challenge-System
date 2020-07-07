import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {FormControl, Validators} from '@angular/forms';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-bottom-sheet-overview-example-sheetp1',
  templateUrl: './bottom-sheet-overview-example-sheetp1.component.html',
  styleUrls: ['./bottom-sheet-overview-example-sheetp1.component.css']
})
export class BottomSheetOverviewExampleSheetp1Component implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  isLinear = true;
  abFormGroup: FormGroup;
  cdFormGroup: FormGroup;
  

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheetp1Component>,private _formBuilder: FormBuilder) {}


  meth1(): void {
    this._bottomSheetRef.dismiss(BottomSheetOverviewExampleSheetp1Component);
  }
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  
  ngOnInit(): void {
    this.abFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.cdFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
  }

  
}
