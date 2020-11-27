import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private prodsvc: ProductService) { }

  ngOnInit(): void {
    this.prodsvc.list().subscribe(
      res => {console.log(res);
               this.products = res as Product[];},
      err => {console.log(err);}
    );
  }

}
