import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'app/cart/cart.service';
import { CartComponent } from 'app/cart/cart.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  myValue:boolean;
  @Input() authorize:boolean;
  @Input() totalQty:number;

  constructor(private CartService:CartService) {
    if(localStorage.getItem("currentUser"))
    {
        this.myValue = true;
        this.CartService.getTotalQty()
        .subscribe(response=>
          {
             this.totalQty = response;
          })

    }
  }
  myValueChange(event) {
    alert(event.value);
    this.myValue = event.value;
  }

  ngOnInit() {

  }

}
