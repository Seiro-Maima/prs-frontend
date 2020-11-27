import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { RequestService } from 'src/app/request/request.service';
import { RequestLine } from '../requestline.class';
import { RequestlineService } from '../requestline.service';
import { Request } from 'src/app/request/request.class';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})

export class RequestlineCreateComponent implements OnInit {

  // create a new instance of request line
  requestline: RequestLine = new RequestLine();
  // array to hold all the products - will display as a drop down menu
  products: Product[] = [];
  // property to hold value of request id number
  rId: number = 0;

  constructor(
    private reqlinesvc: RequestlineService,
    private requestsvc: RequestService,
    private prodsvc: ProductService,
    private actroute: ActivatedRoute,
    private router: Router
  ) { }

  // user adds a line item and saves
  save(): void {
    // save the request id taken from url and put into the request line instance
    //this.requestline.requestId = +this.rId;
    // convert user's product choice id to a number
    //this.requestline.productId = +this.requestline.productId;
    console.debug("b4 create:", this.requestline);
    // call service to add the line item
    this.reqlinesvc.create(this.requestline).subscribe(
      // navigate back to request/lines
      res => { console.debug(res); this.router.navigateByUrl(`/request/lines/${this.rId}`); },
      err => { console.error(err); }
    );
  }

  ngOnInit(): void {
    // save the request id from the url
    this.rId = this.actroute.snapshot.params.id;
    this.requestsvc.get(this.rId).subscribe(
      res => { console.debug(res); this.requestline.request = res as Request; },
      err => { console.error(err); }
    );
    // read list of all products to fill the pull down menu
    this.prodsvc.list().subscribe(
      res => { console.debug(res); this.products = res as Product[]; },
      err => { console.error(err); }
    );
  }

}
