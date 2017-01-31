import { Component, OnInit,Input } from '@angular/core';
import { AddtocartService } from './addtocart.service';

@Component({
  selector: 'app-add-to-cart',
  template: '<button class="btn btn-success" (click)="addtocart(this.id)">Add To Cart</button>'
})
export class AddToCartComponent implements OnInit {

  @Input() id:number;


  constructor(private AddtocartService:AddtocartService) {}

  ngOnInit() {}

  addtocart(id)
  {
    let productID = {
      id:id
    }
    this.AddtocartService.addItems(productID)
    .subscribe(u=>
      {
        window.location.reload();
        console.log(u);
      });
  }

}
