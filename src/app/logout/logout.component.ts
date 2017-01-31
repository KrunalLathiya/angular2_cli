import { Component, OnInit } from '@angular/core';
import { LogoutService } from './logout.service';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {


  constructor(private LogoutService:LogoutService,private router: Router)
  {}

  ngOnInit() {
    let tokenvalue = {
      token:localStorage.getItem("currentUser")
    };

    this.LogoutService.logout(tokenvalue)
    .subscribe(u=>
      {
        window.location.reload();
        localStorage.removeItem("currentUser");
        this.router.navigate(['/login']);
      });
  }




}
