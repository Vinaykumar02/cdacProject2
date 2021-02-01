import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs'
import { Pet } from '../pojos/pet';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = 'http://localhost:8080';
  baseUrl = 'http://localhost:8080';
  userId = sessionStorage.getItem('admin_id');
  
  constructor(private _http: HttpClient) { 

  }
  getLoginDetails(cred): Observable<any>{
   return  this._http.post<any>(`${this.baseUrl}/user`, cred);
  }

  postPetDetails(selectedFile: File, petData): Observable<any>{
    const uploadData = new FormData();
    uploadData.append("imageFile", selectedFile);
    uploadData.append("dtls",JSON.stringify(petData));
    return this._http.post(`${this.baseUrl}/pet/post/${this.userId}`, uploadData, {responseType : 'text'});

    // return this._http.post<any>(this.url, petData)
    
  }
  // postPetDetails(selectedFile: File, petData, userId){
  //   const uploadData = new FormData();
  //   uploadData.append("imageFile", selectedFile);
  //   uploadData.append("dtls",JSON.stringify(petData));
  //   console.log(uploadData);
    
  //   // return this._http.post(`${this.baseUrl}/pet/post/${userId}`, uploadData, {responseType : 'text'});

  //   // return this._http.post<any>(this.url, petData)
    
  // }
  getPetById(petId: number): Observable<Pet> {
    return this._http.get<Pet>(this.baseUrl + "/" + petId);
  }

  updatePetDetails(pet: Pet, userId: any): Observable<any> {
    // let httpHeaders = new HttpHeaders({
    //     'Content-Type': 'application/json'
    // });
    return this._http.put<Pet>(this.baseUrl + "/" + pet.id, pet); 
    // {
    //     headers: httpHeaders,
    //     observe: 'response'
    // }
    // ).pipe(
    //     map(res => res.status),
    //     catchError(this.handleError)
    // );
}
  deletePetById(petId: string): Observable<number> {
    return this._http.delete<number>(this.baseUrl + "/" + petId);
    // .pipe(
        // tap(status => console.log("status: " + status)),
        // catchError(this.handleError)
    // );
}
  
  
}
