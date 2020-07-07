import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengeComponent } from './challenge/challenge.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
  { path : 'Challenge' ,component: ChallengeComponent },
  { path : '' ,component: HomeComponent },
  { path : 'Features' ,component: FeaturesComponent },
  { path : 'Contactus' ,component: ContactusComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
