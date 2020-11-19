import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;

  constructor(
    private usersvc: UserService,
    private actRout: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.usersvc.change(this.user).subscribe(
      res => { console.debug("User change: ", res);
        // if change is successful, go back to user-list
        this.router.navigateByUrl("/user/list");},
      err => { console.error("Error changing user", err)}
    );
  }

  ngOnInit(): void {
    let id = +this.actRout.snapshot.params.id;  // convert to number
    this.usersvc.get(id).subscribe(
      res => {
        console.debug("User: ", res);
        this.user = res;
      },
      err => {
        console.error(err);
      }
    );
  }

}
