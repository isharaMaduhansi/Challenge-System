import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { BottomSheetOverviewExampleSheetComponent } from './bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule }   from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BottomSheetOverviewExampleSheetp1Component } from './bottom-sheet-overview-example-sheetp1/bottom-sheet-overview-example-sheetp1.component';
import { ChallengeComponent } from './challenge/challenge.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturesComponent,
    ContactusComponent,
    BottomSheetOverviewExampleSheetComponent,
    BottomSheetOverviewExampleSheetp1Component,
    ChallengeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatStepperModule,
    MatChipsModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatTabsModule,
    MatIconModule,
    MatGridListModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
