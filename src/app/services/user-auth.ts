import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuth {

  propSubject:BehaviorSubject<boolean>= new BehaviorSubject<boolean>(false)

  constructor() { }
  setToken(token:string){
    localStorage.setItem('token',token)
  }

  removeToken(){
    localStorage.removeItem('token');
  }
  Login(){
    let token = "CR7";
    this.setToken(token);
    this.propSubject.next(true);
  }
  logout(){
    this.removeToken();
    this.propSubject.next(false);
  }

  get isUserLogin():boolean{
    return (localStorage.getItem('token'))?true:false
  }
  userLoggedin(){
    return this.propSubject
  }
}
