import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'What the F should I wear';
  showCurrentOutfit = true;
  showLaundry = false;
  showCloset = false;

  clearAllNav() {
    this.showCurrentOutfit = false;
    this.showCloset = false;
    this.showLaundry = false;
  }

  navCurrentOutfit() {
    this.clearAllNav();
    this.showCurrentOutfit = true;

  }

  navLaundry() {
    this.clearAllNav();
    this.showLaundry = true;
  }

  navCloset() {
    this.clearAllNav();
    this.showCloset = true;
  }

}
