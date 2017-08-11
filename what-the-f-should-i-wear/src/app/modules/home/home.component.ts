import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShirtService } from '../../services/shirt-service';
import { SockService } from '../../services/sock-service';
import { UnderwearService } from '../../services/underwear-service';
import { PantsService } from '../../services/pants-service';
import { TShirt } from '../../Models/t-shirt';
import { Sock } from '../../Models/sock';
import { Underwear } from '../../Models/underwear';
import { Pant } from '../../Models/pant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  outfitForm: FormGroup;
  showShirtCard = false;
  showPantsCard = false;
  showSocksCard = false;
  showUnderwearCard = false;
  selectedShirtIndex = 0;
  selectedPantsIndex = 0;
  selectedUnderwearIndex = 0;
  selectedSocksIndex = 0;
  currentShirt: TShirt;
  currentPants: Pant;
  currentUnderwear: Underwear;
  currentSocks: Sock;
  
  clothingTypeNames: string[] = ["Shirt", "Pants", "Underwear", "Socks"];
  clothingColorNames: string[] = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
  clothingLengthTypeNames: string[] = ["Short", "Long"];
  clothingSockTypeNames: string[] = ["Casual", "Formal"];
  clothingUnderwearTypeNames: string[] = ["Boxers", "Briefs", "Both"];

  constructor(
    private fb: FormBuilder,
    private shirtService: ShirtService,
    private sockService: SockService,
    private underwearService: UnderwearService,
    private pantsService: PantsService
  ) {

  }

  ngOnInit() {
    this.outfitForm = this.fb.group({
      shirtList: [0],
      pantsList: [0],
      underwearList: [0],
      sockList: [0]
    })
  }


  updateShirtIndex(i:number) {
    this.selectedShirtIndex = i;
  }
  updatePantsIndex(i:number) {
    this.selectedPantsIndex = i;
  }
  updateUnderwearIndex(i:number) {
    this.selectedUnderwearIndex = i;
  }
  updateSocksIndex(i:number) {
    this.selectedSocksIndex = i;
  }

  wearShirt() { 
    this.showShirtCard = true;
    this.currentShirt = this.shirtService.allShirts[this.selectedShirtIndex];
  }
  wearPants() {
    this.showPantsCard = true;
    this.currentPants = this.pantsService.allPants[this.selectedPantsIndex];
  }
  wearUnderwear() {
    this.showUnderwearCard = true;
    this.currentUnderwear = this.underwearService.allUnderwear[this.selectedUnderwearIndex];
  }
  wearSocks() {
    this.showSocksCard = true;
    this.currentSocks = this.sockService.allSocks[this.selectedSocksIndex];
  } 
}
