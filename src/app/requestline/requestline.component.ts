import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request/request.service';
import { Request } from '../request/request.class';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user/user.class';
import { UserService } from 'src/app/user/user.service';
import { RequestLine } from './requestline.class';
import { RequestlineService } from 'src/app/requestline/requestline.service';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-requestline',
  templateUrl: './requestline.component.html',
  styleUrls: ['./requestline.component.css']
})

export class RequestlineComponent implements OnInit {
  
  // toggle hide/show rejection reason
  isShow: boolean = true;

  request: Request;
  users: User[] = [];
  requestLines: RequestLine[] = [];
  
  constructor(
    private reqsvc: RequestService,
    private reqlinesvc: RequestlineService,
    private usrsvc: UserService,
    private actRoute: ActivatedRoute,
    private router: Router,  
    private syssvc: SystemService
  ) { }

  // call method to set status to approve
  approve(): void {
    this.reqsvc.setRequestApprove(this.request).subscribe(
      res => { 
        this.refresh(); 
        console.log("Request is approved...");
        this.router.navigateByUrl("/request/review/list"); },
      err => { console.error("Failed to approve request...", err); }
    );
  }

  // call method to show the rejection reason and actual reject button
  showRejectButton():void {
    this.isShow = false;  
  }

  // call method to set status to reject
  reject(): void {
    this.reqsvc.setRequestReject(this.request).subscribe(
      res => { this.refresh(); this.router.navigateByUrl("/request/review/list"); },
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
