import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SignupService
{

  constructor(private http:Http)
  {}

  register(user)
  {
 	let headers = new Headers();
 	headers.append('Content-Type','application/json');

 	let options = new RequestOptions({ headers: headers });

  	return this.http.post('http://reactwithlaravel.dev/register',JSON.stringify(user),options)
  	.map(res=>res.json());
  }
}
