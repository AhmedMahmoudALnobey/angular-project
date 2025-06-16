import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/iproduct';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class APIproduct {
  product!:Iproduct
  products!:Iproduct[]
  constructor(private http:HttpClient) {}
  getAllProducts():Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>(`${environment.baseUrl}products`);
  }
  getProductById(id:string):Observable<Iproduct>{
    return this.http.get<Iproduct>(`${environment.baseUrl}products/${+id}`)
  }
  // search(value:string){
  //   value = value.toLowerCase();
  //   console.log( this.getAllProducts().subscribe(data=>data));

  // }
  insertProduct(data:Iproduct):Observable<Iproduct>{
    return this.http.post<Iproduct>(`${environment.baseUrl}products`,data);
  }
  editProduct(id:string,data:Iproduct):Observable<Iproduct>{
    return this.http.patch<Iproduct>(`${environment.baseUrl}products/${id}`,data);
  }
  deleteProduct(id:string):Observable<Iproduct>{
    return this.http.delete<Iproduct>(`${environment.baseUrl}products/${id}`)
  }
}
