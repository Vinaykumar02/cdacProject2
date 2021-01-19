import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  baseUrl = 'http://localhost:8000/';
  
  constructor(private _http : HttpClient) { }

  getPetList(): Observable<any[]>{
    return this._http.get<any[]>(this.baseUrl);
   }

  postUserDetails (userData){
    return this._http.post<any>(this.baseUrl,userData)
  }
  postUserAddress(userAddress, adopterId){
    return this._http.post<any>(`${this.baseUrl}/${adopterId}`, userAddress);
  }
}
