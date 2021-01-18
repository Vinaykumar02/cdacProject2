import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs'
import { Pet } from '../pojos/pet';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = 'http://localhost:8000';
  
  constructor(private _http: HttpClient) { 

  }
  getLoginDetails(cred): Observable<any>{
   return  this._http.get<any>(`${this.url}/${cred}`)
  }

  postPetDetails(selectedFile: File, petData: Pet): Observable<any>{
    const uploadData = new FormData();
    uploadData.append("imageFile", selectedFile);
    uploadData.append("dtls",JSON.stringify(petData));
    return this._http.post(this.url, uploadData, {responseType : 'text'});

    // return this._http.post<any>(this.url, petData)
    
  }
  
}
