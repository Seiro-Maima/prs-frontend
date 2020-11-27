import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})

export class VendorCreateComponent implements OnInit {

  // create new instance of Vendor
  vendor: Vendor = new Vendor();

  constructor(
    private vendorsvc: VendorService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.vendorsvc.create(this.vendor).subscribe(
      res => { console.debug("Vendor create: ", res);
        this.router.navigateByUrl("/vendor/list");},
      err => { console.error("Error creating vendor", err)}
    );
  }

  ngOnInit(): void {
  }

}
