import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {

  // create an instance of a Product
  // can't use "product: Product;" it must have value in order to bind
  product: Product = new Product();
  // list of vendors that will display on the drop down menu
  vendors: Vendor[] = [];

  constructor(
    private productsvc: ProductService,
    private vendorsvc: VendorService,
    private syssvc: SystemService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.productsvc.change(this.product).subscribe(
      res => { console.debug("User change: ", res);
        this.router.navigateByUrl("/product/list");},
      err => { console.error("Error changing product", err)}
    );
  }

  ngOnInit(): void {
    // need this in ngOnInit() since it has a Foreign Key
    this.vendorsvc.list().subscribe(
      res => {console.log(res);
              // store results of list of Vendors in the vendor variable
              this.vendors = res as Vendor[];},
      err => {console.error(err);}
    );
  }

}
