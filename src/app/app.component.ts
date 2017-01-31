import { Component } from '@angular/core';
import { LogoutService } from 'app/logout/logout.service';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<div>
  	<app-simple-form></app-simple-form>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'Let\'s get started!';
  constructor(private logoutservice:LogoutService,private router: Router){

    if (localStorage.getItem('currentUser'))
    {
      setTimeout(()=>
      {
        let tokenvalue = {
          token:localStorage.getItem("currentUser")
        };
        this.logoutservice.logout(tokenvalue)
        .subscribe(u=>
          {
            localStorage.removeItem("currentUser");
            this.router.navigate(['/login']);
          });
        },1000000);
      }
    }

}
