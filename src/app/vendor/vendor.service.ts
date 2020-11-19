import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from './vendor.class';

const baseurl: string="http://localhost:8080/api/vendors";

@Injectable({
  providedIn: 'root'
})

export class VendorService {

  constructor(private http: HttpClient) { }

  // function to display all rows
  list(): Observable<Vendor[]> {
    return this.http.get(`${baseurl}`) as Observable<Vendor[]>;
  }

  // function to display single row by primary key
  get(id: number): Observable<Vendor> {
    return this.http.get(`${baseurl}/${id}`) as Observable<Vendor>;
  }

  // function to insert a row
  create(vendor: Vendor): Observable<Vendor> {
    return this.http.post(`${baseurl}`, vendor) as Observable<Vendor>;
  }
  
  // function to update a row
  change(vendor: Vendor): Observable<Vendor> {
    return this.http.put(`${baseurl}/${vendor.id}`, vendor) as Observable<Vendor>;  
  }

  // function to delete a row
  remove(vendor: Vendor): Observable<Vendor> {
    return this.http.delete(`${baseurl}/${vendor.id}`) as Observable<Vendor>;
  } 


}
