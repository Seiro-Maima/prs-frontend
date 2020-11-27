import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/core/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';


@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent implements OnInit {

  requests: Request[] = [];
  usrLgIn: number = 0;

  constructor(
    private reqsvc: RequestService,
    private syssvc: SystemService
  ) { }

  ngOnInit(): void {
    // get user id from login info
    this.usrLgIn = this.syssvc.loggedInUser.id;
    // pass user id to requestInReview method
    this.reqsvc.requestInReview(this.usrLgIn).subscribe(
      res => {console.log("Found requests in review status", res);
               this.requests = res as Request[];},
      err => {console.log("Error in getting requests in review", err);}
    );
  }

}
