import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})

export class RequestDetailComponent implements OnInit {

  request: Request;
  users: User[]=[];

  constructor(
    private reqsvc: RequestService,
    private usrsvc: UserService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) { }

  compareFn(a: any, b: any): boolean {
    return a.id === b.id;
  }

  ok(): void {
    this.reqsvc.change(this.request).subscribe(
      res => { console.debug("Request change: ", res);
        this.router.navigateByUrl("/request/list");},
      err => { console.error("Error changing request", err)}
    );
  }

  delete(): void {
    this.reqsvc.remove(this.request).subscribe(
      res => { console.debug("Request deleted: ", res);
        this.router.navigateByUrl("/request/list");},
      err => { console.error("Error deleting request", err)}
    );
  }

  ngOnInit(): void {
  
    this.usrsvc.list().subscribe(
      res => {
          console.debug("User: ", res);
          this.users = res as User[];
      },
      err => {console.log(err);
      }
    );

    let id = +this.actRoute.snapshot.params.id;  // convert to number
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
