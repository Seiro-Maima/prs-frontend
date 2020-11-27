import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  product: Product;
  vendors: Vendor[] = [];

  constructor(
    private prodsvc: ProductService,
    private vendsvc: VendorService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) { }

  compareFn(a: any, b: any): boolean {
    return a.id === b.id;
  }

  ok(): void {
    this.prodsvc.change(this.product).subscribe(
      res => { console.debug("Product change: ", res);
        // if change is successful, go back to product-list
        this.router.navigateByUrl("/product/list");},
      err => { console.error("Error changing product", err)}
    );
  }

  delete(): void {
    this.prodsvc.remove(this.product).subscribe(
      res => { console.debug("Product deleted: ", res);
        // if change is successful, go back to vendor-list
        this.router.navigateByUrl("/product/list");},
      err => { console.error("Error deleting product", err)}
    );
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
