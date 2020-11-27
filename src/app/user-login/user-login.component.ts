import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from '../core/system.service';
import { User } from '../user/user.class';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {

  message: string = "";
  username: string = "";
  password: string = "";
  user: User = null;
 
  constructor(
    private usersvc: UserService,
    private syssvc: SystemService,
    private router: Router
  ) { }

  ngOnInit(): void {

    // default username/password to prevent login while testing
    this.username = "ohussein";
    this.password = "psst";
    this.syssvc.loggedInUser = null;
  }

  login() {
    console.log("Inside login method of user-login component");
    this.usersvc.login(this.username, this.password).subscribe(
      res => {
        console.log('login()... ', res);
          // successful login
        this.user = res as User;
        this.syssvc.loggedInUser = this.user;
        this.router.navigateByUrl("/home");
      },
      err =>
        {
          console.log('Ran into an error... ', err);
          // unsuccessful login
          this.message = "Invalid login. You better not be guessing...";
        }
    );
  }

}
