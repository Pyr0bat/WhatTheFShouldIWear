import { LengthType } from '../../Enums/length-types';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClothingType } from '../../Enums/clothing-type';
import { ColorId } from '../../Enums/colors';
import { UnderwearType } from '../../Enums/underwear-type';
import { SockType } from '../../Enums/sock-type';
import { ShirtService } from '../../services/shirt-service';
import { SockService } from '../../services/sock-service';
import { UnderwearService } from '../../services/underwear-service';
import { PantsService } from '../../services/pants-service';
import { TShirt } from '../../Models/t-shirt';
import { Sock } from '../../Models/sock';
import { Underwear } from '../../Models/underwear';
import { Pant } from '../../Models/pant';

@Component({
  selector: 'app-closet',
  templateUrl: './closet.component.html',
  styleUrls: ['./closet.component.scss']
})
export class ClosetComponent implements OnInit {

  closetForm: FormGroup;
  selectedClothingType: ClothingType;
  selectedClothingColor: ColorId;
  selectedClothingNumberOfReuses: number;
  selectedClothingName: string;
  selectedClothingLength: LengthType;
  selectedClothingUnderwearType: UnderwearType;
  selectedClothingSockType: SockType;

  constructor(
    private fb: FormBuilder,
    private shirtService: ShirtService,
    private sockService: SockService,
    private underwearService: UnderwearService,
    private pantsService: PantsService
  ) {

  }

  ngOnInit() {
    this.closetForm = this.fb.group({
      clothingType: [0],
      clothingColor: [0],
      clothingLength: [0],
      clothingUnderwearType: [0],
      clothingSockType: [0],
      clothingReuse: 0,
      clothingName: ''
    });
  }

  clothingTypeChange(clothingTypeId){
    this.selectedClothingType = clothingTypeId;
  }
  clothingColorChange(clothingColorId) {
    this.selectedClothingColor = clothingColorId;
  }
  clothingLengthChange(clothingLengthType) {
    this.selectedClothingLength = clothingLengthType;
  }
  clothingUnderwearTypeChange(clothingUnderwearType) {
    this.selectedClothingUnderwearType = clothingUnderwearType;
  }
  clothingSockTypeChange(clothingSockType) {
    this.selectedClothingSockType = clothingSockType;
  }


  addItemToCloset(){
    if (this.selectedClothingType === 1) {
      let newShirt = new TShirt(
        this.selectedClothingColor,
        this.selectedClothingNumberOfReuses,
        this.selectedClothingName,
        this.selectedClothingLength
      );
      this.shirtService.addShirt(newShirt);
    } else if(this.selectedClothingType === 2) {
      let newPant = new Pant(
        this.selectedClothingColor,
        this.selectedClothingNumberOfReuses,
        this.selectedClothingName,
        this.selectedClothingLength
      );
      this.pantsService.addPants(newPant);
    }
    else if (this.selectedClothingType === 3) {
      let newUnderwear = new Underwear(
        this.selectedClothingColor,
        this.selectedClothingNumberOfReuses,
        this.selectedClothingName,
        this.selectedClothingUnderwearType
      );
      this.underwearService.addUnderwear(newUnderwear);
    } else if (this.selectedClothingType === 4) {
      let newSock = new Sock(
        this.selectedClothingColor,
        this.selectedClothingNumberOfReuses,
        this.selectedClothingName,
        this.selectedClothingSockType
      );
      this.sockService.addSocks(newSock);
    } else {
      console.log("Who are you and how did you get here D:");
    }
    console.log(this.shirtService.allShirts);
    console.log(this.pantsService.allPants);
    console.log(this.sockService.allSocks);
    console.log(this.underwearService.allUnderwear);
    this.resetForm();
  }

  resetForm() {
    this.closetForm.setValue({
      clothingType: 0,
      clothingColor: 0,
      clothingReuse: 0,
      clothingName: '',
      clothingLength: 0,
      clothingUnderwearType: 0,
      clothingSockType: 0
    })
  }
}
