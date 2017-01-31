// Import component decorator
import { Component } from '@angular/core';
import { SignupService } from './signup.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl: 'app/signup/signup.component.html',
  providers:[SignupService]
})

// Component class
export class SignupComponent
{
  complexForm : FormGroup;

  name:string;
  id:number;
  email:string;
  password:string;
  token:string;
 
  constructor(private SignupService:SignupService, private router: Router,fb: FormBuilder)
  {
      this.complexForm = fb.group({
      
      'name' : [null, Validators.compose([Validators.required,  Validators.minLength(5),Validators.maxLength(10)])],

      'email': [null, Validators.compose([Validators.required])],

      'password' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])]
    })
  }
  register(event,value)
  {
    event.preventDefault();
    console.log('Reactive Form Data: ')
    console.log(value);
    var user = 
    {
      name:this.name,
      email:this.email,
      password:this.password,
    };

    this.SignupService.register(user)
    .subscribe(u=>
      {
        this.router.navigate(['/profile']);
      },
      (err) =>
      {
        var a = JSON.parse(err._body);
        if(a.email)
        {
          for (let entry of a.email)
          {
            console.log(entry);
          }
        }
        if(a.password)
        {
          for (let entry of a.password)
          {
            console.log(entry);
          }
        }
    
      })
  }
}