import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup,Validators } from '@angular/forms';
import { PasswordMatch } from '../Validators/passwordMatch';
import { FormArray } from '@angular/forms';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {



  login = new FormGroup({
    fname: new FormControl('', [Validators.required, Validators.minLength(8,), Validators.maxLength(20)]),
    lname: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.minLength(10,), Validators.maxLength(30)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirm: new FormControl('', [Validators.required,PasswordMatch('password','confirm')]),
    mobiles:new FormArray([new FormControl('',[Validators.required])])
  },
 )
  
  
  addMobile() {
    let mobilenums = this.login.controls.mobiles as FormArray
    mobilenums.push(new FormControl('', [Validators.required]))
  }
  
  
  
  // mustmatch(password: any, confirm: any) {
  //   return (formGroup: FormGroup) => {
  //     const pass = formGroup.controls[password];
  //     const conf = formGroup.controls[confirm]
      
  //     if (conf.errors && !conf.errors['mustmath']) {
  //       return;
  //     }
  //     if (pass.value !== conf.value) {
  //       conf.setErrors({mustmatch:true})
  //     }
  //     else {
  //       conf.setErrors({ null})
  //     }
  //   }
  // }
  
  show() { console.log(this.login) }
  
  constructor() { }

  ngOnInit(): void {
  }

}
