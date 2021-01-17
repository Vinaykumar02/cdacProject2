import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  rootUrl = '';
  constructor(private _http: HttpClient) { }

  getLoginDetails(){
    // this._http.
  }
}
