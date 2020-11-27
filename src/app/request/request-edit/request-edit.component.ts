import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})

export class RequestEditComponent implements OnInit {

  request: Request;
  users: User[]=[];

  constructor(
    private reqsvc: RequestService,
    private usrsvc: UserService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.reqsvc.change(this.request).subscribe(
      res => { console.debug("Product change: ", res);
        // if change is successful, go back to user-list
        this.router.navigateByUrl("/request/list");},
      err => { console.error("Error changing product", err)}
    );
  }

  compareFn(a: any, b: any): boolean {
    return a.id === b.id;
  }

  ngOnInit(): void {

    this.usrsvc.list().subscribe(
      res => {
          console.debug("Vendor: ", res);
          this.users = res as User[];
      },
      err => {console.log(err);
      }
    );

    let id = +this.actRoute.snapshot.params.id;
    this.reqsvc.get(id).subscribe(
      res => {
        console.debug("Request: ", res);
        this.request = res;
      },
      err => {
        console.error(err);
      }
    );


  }

}
