import { Component, OnInit, Input,ChangeDetectionStrategy } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ProfileService } from './profile.service';
import { Profile } from './Profile';

@Component({
  selector: 'app-profile',
  templateUrl: 'app/profile/profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[ProfileService]
})
export class ProfileComponent implements OnInit {

  profile:Profile[];
  constructor(private router: Router,private ProfileService:ProfileService)
  {
    if (!localStorage.getItem('currentUser'))
    {
          this.router.navigate(['/login']);
    }

  }
  ngOnInit()
  {

    this.ProfileService.getProducts()
    .subscribe(profile=>
      {
        this.profile = profile;
      })
  }
}
