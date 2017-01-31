import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService
{

  constructor(private http:Http)
  {}

  login(user)
  {
 	let headers = new Headers();
 	headers.append('Content-Type','application/json');
 	let options = new RequestOptions({ headers: headers });

  	return this.http.post('http://reactwithlaravel.dev/api/authenticate',JSON.stringify(user),options)
  	.map(res=>res.json());
  }
}
