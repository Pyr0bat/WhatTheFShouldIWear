import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ShirtService } from "../../services/shirt-service";
import { SockService } from "../../services/sock-service";
import { UnderwearService } from "../../services/underwear-service";
import { PantsService } from "../../services/pants-service";
import { LaundryService } from "../../services/laundry-service";

@Component({
  selector: 'app-laundry',
  templateUrl: './laundry.component.html',
  styleUrls: ['./laundry.component.scss']
})
export class LaundryComponent implements OnInit {

  constructor(    
    private fb: FormBuilder,
    private shirtService: ShirtService,
    private sockService: SockService,
    private underwearService: UnderwearService,
    private pantsService: PantsService,
    private laundryService: LaundryService) { }

  ngOnInit() {
  }

}
