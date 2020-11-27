import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from './request.class';

const baseurl: string="http://localhost:8080/api/requests"; 

@Injectable({
  providedIn: 'root'
})

export class RequestService {

  constructor(private http: HttpClient) { }

  // function to display all rows
  list(): Observable<Request[]> {
    return this.http.get(`${baseurl}`) as Observable<Request[]>;
  }

  // function to display single row by primary key
  get(id: number): Observable<Request> {
    return this.http.get(`${baseurl}/${id}`) as Observable<Request>;
  }

  // function to insert a row
  create(request: Request): Observable<Request> {
    return this.http.post(`${baseurl}`, request) as Observable<Request>;
  }
  
  // function to update a row
  change(request: Request): Observable<Request> {
    return this.http.put(`${baseurl}/${request.id}`, request) as Observable<Request>;  
  }

  // function to delete a row
  remove(request: Request): Observable<Request> {
    return this.http.delete(`${baseurl}/${request.id}`) as Observable<Request>;
  }

  // function similar to list, but will get reviews of only user that is logged in
  requestInReview(usrLgIn: number): Observable<Request[]> {
    return this.http.get(`${baseurl}/reviews/${usrLgIn}`) as Observable<Request[]>;
  }

  // function to set request to review
  setRequestReview(request: Request): Observable<Request> {
     return this.http.put(`${baseurl}/review`, request) as Observable<Request>;
  }

  // function to set request to approved
  setRequestApprove(request: Request): Observable<Request> {
    return this.http.put(`${baseurl}/approve`, request) as Observable<Request>;
  }

  //function to set request to rejected
  setRequestReject(request: Request): Observable<Request> {
    return this.http.put(`${baseurl}/reject`, request) as Observable<Request>;
  }

}
