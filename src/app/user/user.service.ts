import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.class';

const baseurl: string="http://localhost:8080/api/users"; 

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  // function to display all rows
  list(): Observable<User[]> {
    return this.http.get(`${baseurl}`) as Observable<User[]>;
  }

  // function to display single row by primary key
  get(id: number): Observable<User> {
    return this.http.get(`${baseurl}/${id}`) as Observable<User>;
  }

  // function to insert a row
  create(user: User): Observable<User> {
    return this.http.post(`${baseurl}`, user) as Observable<User>;
  }
  
  // function to update a row
  change(user: User): Observable<User> {
    return this.http.put(`${baseurl}/${user.id}`, user) as Observable<User>;  
  }

  // function to delete a row
  remove(user: User): Observable<User> {
    return this.http.delete(`${baseurl}/${user.id}`) as Observable<User>;
  }

  // function for user to login
  // login(username: string, password: string): void {

  // }

}