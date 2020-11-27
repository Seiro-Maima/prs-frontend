import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.class';


const baseurl: string="http://localhost:8080/api/products"; 

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }

  // function to display all rows
  list(): Observable<Product[]> {
    return this.http.get(`${baseurl}`) as Observable<Product[]>;
  }

  // function to display single row by primary key
  get(id: number): Observable<Product> {
    return this.http.get(`${baseurl}/${id}`) as Observable<Product>;
  }

  // function to insert a row
  create(product: Product): Observable<Product> {
    return this.http.post(`${baseurl}`, product) as Observable<Product>;
  }
  
  // function to update a row
  change(product: Product): Observable<Product> {
    return this.http.put(`${baseurl}/${product.id}`, product) as Observable<Product>;  
  }

  // function to delete a row
  remove(product: Product): Observable<Product> {
    return this.http.delete(`${baseurl}/${product.id}`) as Observable<Product>;
  }

}
