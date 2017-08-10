import { ReactiveErrors } from '@angular/forms/src/directives/reactive_errors';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NglModule } from 'ng-lightning';
import { HomeComponent } from './modules/home/home.component';
import { ClosetComponent } from './modules/closet/closet.component';
import { LaundryComponent } from './modules/laundry/laundry.component';
import { ShirtService } from './services/shirt-service';
import { SockService } from './services/sock-service';
import { UnderwearService } from './services/underwear-service';
import { PantsService } from './services/pants-service';


import { AppComponent } from './app.component';
import { LoadTileComponent } from './Components/load-tile/load-tile.component';


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
    LaundryComponent,
    LoadTileComponent
  ],
  imports: [
    BrowserModule,
    NglModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ShirtService,
    SockService,
    UnderwearService,
    PantsService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
