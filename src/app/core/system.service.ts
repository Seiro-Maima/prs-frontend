import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user.class';

@Injectable({
  providedIn: 'root'
})

// create a System Service that can be shared throughout the application
export class SystemService {

  // logged in user should be null
  loggedInUser: User = null;

  constructor(
    private router: Router
  ) { }

  // check if user is admin
  isAdmin(): boolean {
  return (this.loggedInUser == null) ? false : this.loggedInUser.admin;
  }

  verifyLogin(): void {
    // redirect user to login page if not logged in
    if (this.loggedInUser == null){
      console.log("User is not logged in...redirecting to login page.");
      this.router.navigateByUrl("/user/login");
    }
  }

}
