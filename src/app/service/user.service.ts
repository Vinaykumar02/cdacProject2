import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = " ";
  constructor(private _http : HttpClient) { }

  postUserDetails (userData){
    return this._http.post<any>(this.url,userData)
  }
  postUserAddress(userAddress){
    return this._http.post<any>(this.url,userAddress)
  }
}
