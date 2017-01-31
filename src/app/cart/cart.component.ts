import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Cart } from './Cart';
import { CartService } from './cart.service';
import { NavbarComponent } from 'app/navbar/navbar.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  cart:Cart[];
  removeSuccess:boolean;
  cartID : {};
  @Input() myValue:boolean;
  @Output() counterChange = new EventEmitter();
  constructor(private cartservice:CartService) {}

  ngOnInit() {
    this.cartservice.getCartDetails()
    .subscribe(cart=>
      {
           this.cart = cart;

      })
      this.myValue = true;
       this.counterChange.emit({
         value: this.myValue
       });
  }
  removeItem(id)
  {
      let cartID = {
        id:id
      }

      this.cartservice.removeItem(cartID)
      .subscribe(response=>
        {
            for(var i = 0; i < this.cart.length; i++)
            {
                if(this.cart[i].cartID==response.id)
                {
                    this.cart.splice(i,1);
                }
            }

        })


    }

  }
