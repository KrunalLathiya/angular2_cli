import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CartService {

  id : number;
  constructor(private http:Http) { }
  getTotalQty()
  {
    let tokenValue = 'Bearer ' + localStorage.getItem("currentUser");
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',tokenValue);
    let options = new RequestOptions({ headers: headers });

  	return this.http.get('http://reactwithlaravel.dev/cart/totalqty',options)
  	.map(res=>res.json());
  }

  getCartDetails()
  {
    let tokenValue = 'Bearer ' + localStorage.getItem("currentUser");
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',tokenValue);
    let options = new RequestOptions({ headers: headers });

  	return this.http.get('http://reactwithlaravel.dev/cart/details',options)
  	.map(res=>res.json());
  }
  removeItem(id)
  {
    let tokenValue = 'Bearer ' + localStorage.getItem("currentUser");
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',tokenValue);
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://reactwithlaravel.dev/cart/removeItem',JSON.stringify(id),options)
    .map(res=>res.json());
  }
}
