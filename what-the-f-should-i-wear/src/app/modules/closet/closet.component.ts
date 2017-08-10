import { LengthType } from '../../Enums/length-types';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClothingType } from '../../Enums/clothing-type';
import { ColorId } from '../../Enums/colors';
import { UnderwearType } from '../../Enums/underwear-type';
import { SockType } from '../../Enums/sock-type';

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
    private fb: FormBuilder
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
    console.log("Added your clothing type: ",this.selectedClothingType);
    console.log("color: ",this.selectedClothingColor);
    console.log("# of reuses: ",this.selectedClothingNumberOfReuses);
    console.log("name: ",this.selectedClothingName);
    console.log("length: ",this.selectedClothingLength);
    console.log("underwear type: ",this.selectedClothingUnderwearType);
    console.log("sock type: ",this.selectedClothingSockType);
  }
}
