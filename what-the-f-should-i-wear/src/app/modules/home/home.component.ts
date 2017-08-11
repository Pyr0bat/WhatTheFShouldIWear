import { DankRating } from '../../Enums/dank-rating';
import { ClothingType } from '../../Enums/clothing-type';
import { BaseClothingItem } from '../../Models/base-clothing-item';
import { LaundryService, InLaundryClothingItem } from '../../services/laundry-service';
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
  currentCleanlinessValue: number;
  showLoadExampleCloset: boolean;
  dankRating: DankRating;
  
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
    private pantsService: PantsService,
    private laundryService: LaundryService
  ) {

  }

  ngOnInit() {
    this.outfitForm = this.fb.group({
      shirtList: [0],
      pantsList: [0],
      underwearList: [0],
      sockList: [0]
    })
    this.currentCleanlinessValue = 0;

    this.showLoadExampleCloset = true;
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
    this.calculateCleanlinessRating();
  }
  wearPants() {
    this.showPantsCard = true;
    this.currentPants = this.pantsService.allPants[this.selectedPantsIndex];
    this.calculateCleanlinessRating();
  }
  wearUnderwear() {
    this.showUnderwearCard = true;
    this.currentUnderwear = this.underwearService.allUnderwear[this.selectedUnderwearIndex];
    this.calculateCleanlinessRating();
  }
  wearSocks() {
    this.showSocksCard = true;
    this.currentSocks = this.sockService.allSocks[this.selectedSocksIndex];
    this.calculateCleanlinessRating();
  } 

  calculateCleanlinessRating() {
    let maxRemaningUses = 0;
    let sumOfRemainingUses = 0;
    if (this.currentShirt !== undefined) {
      console.log("summing rem shirt! " + this.currentShirt.itemName);
      maxRemaningUses += this.currentShirt.numberOfRemainingUses;
      sumOfRemainingUses += this.shirtService.allShirts[this.selectedShirtIndex].currentRemainingNumberOfUses;
    }
    
    if (this.currentUnderwear !== undefined) {
      console.log("summing rem underwear! " + this.currentUnderwear.itemName);
      maxRemaningUses += this.currentUnderwear.numberOfRemainingUses;
      sumOfRemainingUses += this.underwearService.allUnderwear[this.selectedUnderwearIndex].currentRemainingNumberOfUses;
    }
    
    if (this.currentPants !== undefined) {
      console.log("summing rem pants! " + this.currentPants.itemName);
      maxRemaningUses += this.currentPants.numberOfRemainingUses;
      sumOfRemainingUses += this.pantsService.allPants[this.selectedPantsIndex].currentRemainingNumberOfUses;
    }
    
    if (this.currentSocks !== undefined) {
      console.log("summing rem socks! " + this.currentSocks.itemName);
      maxRemaningUses += this.currentSocks.numberOfRemainingUses;
      sumOfRemainingUses += this.sockService.allSocks[this.selectedSocksIndex].currentRemainingNumberOfUses;
    }

    console.log("maxRemaningUses = " + maxRemaningUses);     
    console.log("sumOfRemainingUses = " + sumOfRemainingUses);

    this.currentCleanlinessValue = (sumOfRemainingUses/maxRemaningUses) * 100;
    console.log("currentCleanlinessValue = " + this.currentCleanlinessValue);

    if(this.currentCleanlinessValue > 0 && this.currentCleanlinessValue < 25){
      this.dankRating = 1;
    }
    if(this.currentCleanlinessValue >= 25 && this.currentCleanlinessValue < 50){
      this.dankRating = 2;
    }
    if(this.currentCleanlinessValue >= 50 && this.currentCleanlinessValue < 75){
      this.dankRating = 3;
    }
    if(this.currentCleanlinessValue >=75 && this.currentCleanlinessValue <=100){
      this.dankRating = 4;
    }
  }
/**
 * IMPORTANT: Had to pass in the 'current' item delcared here instead of the array value ref because kept being undefined
 * Will need to get creative when adding them back to after laundry
 */
  confirmSelection() {
    console.log("Debug: confirming selection");
    this.calculateCleanlinessRating()
    if (this.currentShirt !== undefined) {
      console.log("confirm Selection of shirt! " + this.currentShirt.itemName);
      if(this.shirtService.allShirts[this.selectedShirtIndex].currentRemainingNumberOfUses > 0){
        this.shirtService.allShirts[this.selectedShirtIndex].currentRemainingNumberOfUses--;
        if(this.shirtService.allShirts[this.selectedShirtIndex].currentRemainingNumberOfUses === 0 && 
            this.shirtService.allShirts[this.selectedShirtIndex].isInLaundry === false){
              // ADD TO LAUNDRY BASKET BASED OFF COLOR
              this.sendToLaundryBin(this.currentShirt, this.selectedShirtIndex);
              // Mark Item as In laundry bin!
              this.shirtService.allShirts[this.selectedShirtIndex].isInLaundry = true;
        }
      }      
    }
    
    if (this.currentUnderwear !== undefined) {
      console.log("confirm Selection of underwear! " + this.currentUnderwear.itemName);
      if(this.underwearService.allUnderwear[this.selectedUnderwearIndex].currentRemainingNumberOfUses > 0){
        this.underwearService.allUnderwear[this.selectedUnderwearIndex].currentRemainingNumberOfUses--;
        if(this.underwearService.allUnderwear[this.selectedUnderwearIndex].currentRemainingNumberOfUses === 0 &&
            this.underwearService.allUnderwear[this.selectedUnderwearIndex].isInLaundry === false){
              let laundryItem = new InLaundryClothingItem(this.underwearService[this.selectedUnderwearIndex], this.selectedUnderwearIndex);
              this.sendToLaundryBin(this.currentUnderwear, this.selectedUnderwearIndex);
              this.underwearService.allUnderwear[this.selectedUnderwearIndex].isInLaundry = true;
        }
      }
    }
    
    if (this.currentPants !== undefined) {
      console.log("confirm Selection of pants! " + this.currentPants.itemName);
      if(this.pantsService.allPants[this.selectedPantsIndex].currentRemainingNumberOfUses > 0){
        this.pantsService.allPants[this.selectedPantsIndex].currentRemainingNumberOfUses--;
        if(this.pantsService.allPants[this.selectedPantsIndex].currentRemainingNumberOfUses === 0 &&
            this.pantsService.allPants[this.selectedPantsIndex].isInLaundry === false){
              this.sendToLaundryBin(this.currentPants, this.selectedPantsIndex);
              this.pantsService.allPants[this.selectedPantsIndex].isInLaundry = true;
        }
      }
    }
    
    if (this.currentSocks !== undefined) {
      console.log("confirm Selection of socks! " + this.currentSocks.itemName);
      if(this.sockService.allSocks[this.selectedSocksIndex].currentRemainingNumberOfUses > 0){
        this.sockService.allSocks[this.selectedSocksIndex].currentRemainingNumberOfUses--;
        if(this.sockService.allSocks[this.selectedSocksIndex].currentRemainingNumberOfUses === 0 &&
            this.sockService.allSocks[this.selectedSocksIndex].isInLaundry === false){
              this.sendToLaundryBin(this.currentSocks, this.selectedSocksIndex);
              this.sockService.allSocks[this.selectedSocksIndex].isInLaundry = true;
            }
      }
    }
    
  };

  sendToLaundryBin(clothingItem, index: number) {
    let laundryItem = new InLaundryClothingItem(clothingItem, index);
    console.log("Sending " + clothingItem.itemName + " to the laundry bin");

    switch(laundryItem.clothingItem.color){
      case 1 :{
        this.laundryService.addRed(laundryItem);
        break;
      }

      case 2 :{
        this.laundryService.addOrange(laundryItem);
        break;
      }
      
      case 3 :{
        this.laundryService.addYellow(laundryItem);
        break;
      }

      case 4 :{
        this.laundryService.addGreen(laundryItem);
        break;
      }

      case 5 :{
        this.laundryService.addBlue(laundryItem);
        break;
      }

      case 6 :{
        this.laundryService.addIndigo(laundryItem);
        break;
      }

      case 7 :{
        this.laundryService.addViolet(laundryItem);
        break;
      }

      default: {
        console.log("Send to laundry case = default");
      }      
    }
  };

  loadClothes(){
    this.showLoadExampleCloset = false;
    let redshirt = new TShirt(1,3,"test red shirt", 1);
    let orangeshirt = new TShirt(2,3,"test orange shirt", 2);
    let yellowUnderwear = new Underwear(3,1,"test yellow underwear", 1);
    let greenUnderwear = new Underwear(4,1,"test green underwear", 2);
    let bluePants = new Pant(5,5,"test blue pants", 1);
    let indigoPants = new Pant(6,5,"test indigo pants", 2);
    let violetSocks = new Sock(7,1,"test violet socks", 1);
    let redSocks = new Sock(1,1,"test red SOCKS", 2);

    this.shirtService.addShirt(redshirt);
    this.shirtService.addShirt(orangeshirt);
    this.underwearService.addUnderwear(yellowUnderwear);
    this.underwearService.addUnderwear(greenUnderwear);
    this.pantsService.addPants(bluePants);
    this.pantsService.addPants(indigoPants);
    this.sockService.addSocks(violetSocks);
    this.sockService.addSocks(redSocks);
  }

  hideSocksCard() {
    this.showSocksCard = false;
  }

  hideShirtCard() {
    this.showShirtCard = false;
  }

  hidePantsCard() {
    this.showPantsCard = false;
  }

  hideUnderwearCard() {
    this.showUnderwearCard = false;
  }

}
