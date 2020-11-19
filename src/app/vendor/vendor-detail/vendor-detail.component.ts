import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})

export class VendorDetailComponent implements OnInit {

  vendor: Vendor;

  constructor(
    private vndrSvc: VendorService,
    private actRout: ActivatedRoute,
    private router: Router
  ) { }

  ok(): void {
    this.vndrSvc.change(this.vendor).subscribe(
      res => { console.debug("Vendor change: ", res);
        // if change is successful, go back to user-list
        this.router.navigateByUrl("/vendor/list");},
      err => { console.error("Error changing vendor", err)}
    );
  }

  ngOnInit(): void {
    let id = +this.actRout.snapshot.params.id;  // convert to number
    this.vndrSvc.get(id).subscribe(
      res => {
        console.debug("Vendor: ", res);
        this.vendor = res;
      },
      err => {
        console.error(err);
      }
    );
  }

}
