import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],

})
export class ProductComponent implements OnInit {

  public productForm = new FormGroup({
    infra: new FormControl(''),
    vcloud: new FormControl(''),
    currency: new FormControl(''),
    virtualMachines: new FormControl(''),
    productEdition: new FormControl(''),
    hosttype: new FormControl(''),
    storagetype: new FormControl(''),
    infracost: new FormControl('')
  });
  

  updateproduct() {
    console.log(this.productForm.value);
      this.router.navigate(['/success'])
  }

  constructor(private router:Router) { }

  ngOnInit() {

  }
}
