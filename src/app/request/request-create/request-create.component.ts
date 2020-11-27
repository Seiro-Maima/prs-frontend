import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { Product } from 'src/app/product/product.class';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})

export class RequestCreateComponent implements OnInit {

  request: Request = new Request();

  constructor(
    private reqsvc: RequestService,
    private syssvc: SystemService,
    private actroute: ActivatedRoute,
    private router: Router,
    private usersvc: UserService
  ) { }

  save(): void {
    this.reqsvc.create(this.request).subscribe(
      res => { console.debug("Request added: ", res);
        this.router.navigateByUrl("/request/list");},
      err => { console.error("Error adding request", err)}
    );
  }

  ngOnInit(): void {
    this.request.user = this.syssvc.loggedInUser;
  }

}
