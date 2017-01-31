import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AddtocartService {

  id : number;

  constructor(private http:Http) { }
  addItems(id)
  {
    let tokenValue = 'Bearer ' + localStorage.getItem("currentUser");
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',tokenValue);
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://reactwithlaravel.dev/add-to-cart',JSON.stringify(id),options)
    .map(res=>res.json());
  }
}
