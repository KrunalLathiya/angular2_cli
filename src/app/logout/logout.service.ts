import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LogoutService {

  constructor(private http:Http) { }
  logout(token)
  {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://reactwithlaravel.dev/logout',JSON.stringify(token),options)
    .map(res=>res.json());
  }

}
