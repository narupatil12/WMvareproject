import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  registerForm: FormGroup | undefined;
  forbiddenNames: any;
  forbiddenEmails: AsyncValidatorFn | AsyncValidatorFn[] | null | undefined;

  constructor() { }

  ngOnInit(): void {

    this.registerForm = new FormGroup({
      'userData': new FormGroup({
          'username':new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
          'email':new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmails),
      }),
      'gender':new FormControl('female'),
      'hobbies':new FormArray([])
    });
  }

}
