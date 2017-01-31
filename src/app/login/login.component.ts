// Import component decorator
import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Component({
  templateUrl: 'app/login/login.component.html',
  providers:[LoginService]
})
// Component class
export class LoginComponent
{
  email:string;
  password:string;
  token:string;

  constructor(private LoginService:LoginService, private router: Router)
  {

  }
  login(event)
  {
    event.preventDefault();
    var user =
    {
      email:this.email,
      password:this.password,
    };

    this.LoginService.login(user)
    .subscribe(u=>
      {
      	localStorage.setItem('currentUser',u.token);
        window.location.reload();
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
