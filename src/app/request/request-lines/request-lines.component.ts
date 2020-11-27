import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { RequestLine } from 'src/app/requestline/requestline.class';
import { RequestlineService } from 'src/app/requestline/requestline.service';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})

export class RequestLinesComponent implements OnInit {

  request: Request;
  users: User[]=[];
  requestLines: RequestLine[]=[];

  constructor(
    private reqsvc: RequestService,
    private reqlinesvc: RequestlineService,
    private usrsvc: UserService,
    private actRoute: ActivatedRoute,
    private router: Router,  
  ) { }

  // call method to set status to review
  review() {
    this.reqsvc.setRequestReview(this.request).subscribe(
      res => { this.refresh(); this.router.navigateByUrl("/request/list"); },
      err => { console.error(err); }
    );
  }

  // pass in the id of the line item to delete
  delete(id: number): void {
    console.debug(`Deleting line id ${id}`);
    this.reqlinesvc.removeLinebyId(id).subscribe(
          res => { this.refresh(); },
          err => { console.error(err); }
    );
  }

  // re-read the request
  refresh(): void {
    // pull id off the route
    let id = this.actRoute.snapshot.params.id;
    this.reqsvc.get(id).subscribe(
      res => { console.debug(res); this.request = res; },
      err => { console.error(err); }
    );
    this.reqlinesvc.getRequestLines(id).subscribe(
      res => { console.debug(res); this.requestLines = res; },
      err => { console.error(err); }
    );
  }

  ngOnInit(): void {
    this.refresh();
  }

}
