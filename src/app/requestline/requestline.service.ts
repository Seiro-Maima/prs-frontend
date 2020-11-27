import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestLine } from './requestline.class';

const baseurl: string="http://localhost:8080/api/lines"; 

@Injectable({
  providedIn: 'root'
})

export class RequestlineService {

  constructor(private http: HttpClient) { }

  // function to display all rows
  list(): Observable<RequestLine[]> {
    return this.http.get(`${baseurl}`) as Observable<RequestLine[]>;
  }

  // function to display single row by primary key
  get(id: number): Observable<RequestLine> {
    return this.http.get(`${baseurl}/${id}`) as Observable<RequestLine>;
  }

  // function to insert
  create(requestline: RequestLine): Observable<RequestLine> {
    return this.http.post(`${baseurl}`, requestline) as Observable<RequestLine>;
  }
  
  // function to update
  change(requestline: RequestLine): Observable<RequestLine> {
    return this.http.put(`${baseurl}/${requestline.id}`, requestline) as Observable<RequestLine>;  
  }

  // function to deletea
  remove(requestline: RequestLine): Observable<RequestLine> {
    return this.http.delete(`${baseurl}/${requestline.id}`) as Observable<RequestLine>;
  }

  // function to delete by id number
  removeLinebyId(id: number): Observable<Request> {
    return this.http.delete(`${baseurl}/${id}`) as Observable<Request>;
  }

  // function to get line items attached to specific request
  getRequestLines(id: number): Observable<RequestLine[]> {
    return this.http.get(`${baseurl}/byrequest/${id}`) as Observable<RequestLine[]>;
  }

}
