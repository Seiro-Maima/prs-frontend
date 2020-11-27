import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})

export class ProductEditComponent implements OnInit {

  product: Product;
  vendors: Vendor[] = [];

  constructor(
    private prodsvc: ProductService,
    private vendsvc: VendorService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.prodsvc.change(this.product).subscribe(
      res => { console.debug("Product change: ", res);
        // if change is successful, go back to user-list
        this.router.navigateByUrl("/product/list");},
      err => { console.error("Error changing product", err)}
    );
  }

  compareFn(a: any, b: any): boolean {
    return a.id === b.id;
  }

  ngOnInit(): void {

    this.vendsvc.list().subscribe(
      res => {
          console.debug("Vendor: ", res);
          this.vendors = res as Vendor[];
      },
      err => {console.log(err);
      }
    );

    let id = +this.actRoute.snapshot.params.id;  // convert to number
    this.prodsvc.get(id).subscribe(
      res => {
        console.debug("Product: ", res);
        this.product = res;
      },
      err => {
        console.error(err);
      }
    );
  }

}
