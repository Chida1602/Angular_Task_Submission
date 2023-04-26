import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getProducts():Observable<any> {
    return this.http.get("http://localhost:4500/products");
  }
  getDetails(id:number):Observable<any>{
    return this.http.get("http://localhost:4500/details/"+id)
  }

  getProductById(id:number):Observable<any>{
    return this.http.get("http://localhost:4500/services/"+id)
  }
  
}
