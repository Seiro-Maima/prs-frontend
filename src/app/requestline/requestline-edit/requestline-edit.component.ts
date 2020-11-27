import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { RequestService } from 'src/app/request/request.service';
import { RequestLine } from '../requestline.class';
import { RequestlineService } from '../requestline.service';
import { Request } from 'src/app/request/request.class';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})

export class RequestlineEditComponent implements OnInit {

  requestline: RequestLine;
  products: Product[] = [];
  rId: number = 0;

  constructor(
    private reqlinesvc: RequestlineService,
    private requestsvc: RequestService,
    private prodsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    // this.requestline.requestId = +this.rId;
    // this.requestline.productId = +this.requestline.productId;
    console.debug(this.requestline);
    this.reqlinesvc.change(this.requestline).subscribe(
      res => { console.debug(res); this.router.navigateByUrl(`/request/lines/${this.requestline.request.id}`); },
      err => { console.error(err); }
    );
  }

  compareFn(a: any, b: any): boolean {
    return a.id === b.id;
  }

  ngOnInit(): void {
    // save the request id from the url
    this.rId = this.route.snapshot.params.id;
    console.log("Here is the rid: ", this.rId);
    this.reqlinesvc.get(this.rId).subscribe(
      res => { console.debug(res); this.requestline = res as RequestLine; },
      err => { console.error(err); }
    );

    // read list of all products to fill the pull down menu
    this.prodsvc.list().subscribe(
      res => { console.debug(res); this.products = res as Product[]; },
      err => { console.error(err); }
    );
  }

}
