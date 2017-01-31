import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService
{
	id:number;
  	constructor(private http:Http)
  	{}

  getProducts()
  {
	 	let headers = new Headers();
	 	headers.append('Content-Type','application/json');

	  	return this.http.get('http://reactwithlaravel.dev/products')
	  	.map(res=>res.json());
  }
}
