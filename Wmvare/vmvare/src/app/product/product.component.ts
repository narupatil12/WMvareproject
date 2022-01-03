import {  OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators }  from '@angular/forms';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  
})
export class ProductComponent implements OnInit {
  
  constructor() { }

  formAlta: FormGroup | undefined;

  ngOnInit() {
     this.formAlta = new FormGroup({
       idPro: new FormControl(),
       documentTypePro: new FormControl(),
       namePro: new FormControl('',[Validators.required]),
       firstSurnamePro: new FormControl(),
       secondSurnamePro: new FormControl(),
       businessNamePro: new FormControl(),
       idCli: new FormControl(),
       documentTypeCli: new FormControl(),
       nameCli: new FormControl('',Validators.required),
       firstSurnameCli: new FormControl(),
       secondSurnameCli: new FormControl(),
       businessNameCli: new FormControl(),      
     });
   }

}
