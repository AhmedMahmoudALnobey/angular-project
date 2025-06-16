import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../models/iuser';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserApi {

  constructor(private http:HttpClient) { }

  addNewUser(data:Iuser):Observable<Iuser>{
    return this.http.post<Iuser>(`${environment.baseUrl}users`,data)
  }

}
