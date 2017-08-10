import { ReactiveErrors } from '@angular/forms/src/directives/reactive_errors';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NglModule } from 'ng-lightning';
import { HomeComponent } from './modules/home/home.component';
import { ClosetComponent } from './modules/closet/closet.component';
import { LaundryComponent } from './modules/laundry/laundry.component';
//import { WardrobeAssComponent } from './modules/wardrobe-ass/wardrobe-ass.component';

import { AppComponent } from './app.component';


// const appRouters: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: 'my-closet', component: ClosetComponent },
//   { path: 'laundry', component: LaundryComponent },
//   { path: 'wardrobe-assistant', component: WardrobeAssComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClosetComponent,
    LaundryComponent
  ],
  imports: [
    BrowserModule,
    NglModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
