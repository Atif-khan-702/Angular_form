import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  get fname(){
    return this.loginForm.get('fname');
  }
  get mname(){
    return this.loginForm.get('mname');
  }
  get lname(){
    return this.loginForm.get('lname');
  }
  get fatherName(){
    return this.loginForm.get('fatherName');
  }
  get motherName(){
    return this.loginForm.get('motherName');
  }
  get gender(){
    return this.loginForm.get('gender');
  }
  get adhar(){
    return this.loginForm.get('adhar');
  }
  get DOB(){
    return this.loginForm.get('DOB');
  }
  get userName(){
    return this.loginForm.get('userName');
  }
  get password(){
    return this.loginForm.get('password');
  }
  get cnf_pass(){
    return this.loginForm.get('cnf_pass');
  }
  get email(){
    return this.loginForm.get('email');
  }
  get phone(){
    return this.loginForm.get('phone');
  }
  get country(){
    return this.loginForm.get('country');
  }
  get city(){
    return this.loginForm.get('city');
  }
  get state(){
    return this.loginForm.get('state');
  }

  constructor( private fb : FormBuilder) { }

  loginForm = this.fb.group({
    fname:['', [Validators.required, Validators.minLength(3)]],
    mname: [''],
    lname:['',[Validators.required, Validators.minLength(3)]],
    fatherName:['',[Validators.required, Validators.minLength(3)]],
    motherName:['',[Validators.required, Validators.minLength(3)]],
    gender:['',Validators.required],
    adhar:['',[Validators.required, Validators.minLength(12)]],
    DOB:['',Validators.required],
    userName:['',[Validators.required, Validators.minLength(3)]],
    password:['',[Validators.required, Validators.minLength(3)]],
    cnf_pass:['',[Validators.required, Validators.minLength(3)]],
    email:['',[Validators.required, Validators.minLength(3)]],
    phone:['',[Validators.required, Validators.minLength(10)]],
    country:['',[Validators.required, Validators.minLength(3)]],
    state:['',[Validators.required, Validators.minLength(3)]],
    city:['',[Validators.required, Validators.minLength(3)]]
  });
  ngOnInit(): void {
  }

}
