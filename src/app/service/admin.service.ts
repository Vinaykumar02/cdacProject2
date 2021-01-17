import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = " ";
  
  constructor(private _http: HttpClient) { 

  }
  getLoginDetails(cred): Observable<any>{
   return  this._http.get<any>(`${this.url}/${cred}`)
  }

  postPetDetails(petData): Observable<any>{

    return this._http.post<any>(this.url, petData)
    
  }
  
}
