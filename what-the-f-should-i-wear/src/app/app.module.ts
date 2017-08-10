import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NglModule } from 'ng-lightning';
import { HomeComponent } from './modules/home-component';
import { ClosetComponent } from './modules/closet-component';
import { LaundryComponent } from './modules/laundry-component';
import { WardrobeAssistantComponent } from './modules/wardrobe-assistant-component';

import { AppComponent } from './app.component';

const appRouters: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'my-closet', component: ClosetComponent },
  { path: 'laundry', component: LaundryComponent },
  { path: 'wardrobe-assistant', component: WardrobeAssistantComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClosetComponent,
    LaundryComponent,
    WardrobeAssistantComponent
  ],
  imports: [
    BrowserModule,
    NglModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
