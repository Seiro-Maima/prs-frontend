import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.class';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  user: User = null;
  admin: boolean = false;
  
  constructor(
    // system service will give you access to logged in user
    private syssvc: SystemService
  ) { }

  ngOnInit(): void {
    this.user = this.syssvc.loggedInUser;
    this.admin = this.syssvc.isAdmin();
  }

}
