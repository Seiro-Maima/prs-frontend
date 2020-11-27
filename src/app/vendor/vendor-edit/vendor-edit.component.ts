import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})

export class VendorEditComponent implements OnInit {

  vendor: Vendor;

  constructor(
    private vendorsvc: VendorService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.vendorsvc.change(this.vendor).subscribe(
      res => { console.debug("Vendor change: ", res);
        // if change is successful, go back to vendor-list
        this.router.navigateByUrl("/vendor/list");},
      err => { console.error("Error changing vendor", err)}
    );
  }

  ngOnInit(): void {
    let id = +this.actRoute.snapshot.params.id;  // convert to number
    this.vendorsvc.get(id).subscribe(
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
