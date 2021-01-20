import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  baseUrl = 'http://localhost:8080/';
  
  constructor(private _http : HttpClient) { }

  getPetList(): Observable<any[]>{
    return this._http.get<any[]>(this.baseUrl);
   }

  postUserDetails (userData, petId){
    return this._http.post<any>(`${this.baseUrl}/adoption/${petId}`,userData)
  }
  postUserAddress(userAddress, adopterId){
    return this._http.post<any>(`${this.baseUrl}/adoption/address/${adopterId}`, userAddress);
  }
}
