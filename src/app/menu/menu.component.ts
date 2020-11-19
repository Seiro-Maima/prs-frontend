import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  // array of menu items
  menus: string[] = [
    "Home",

    // <a routerLink="/home">Home</a> |



    "User",
    "Request",
    "Vendor",
    "Product",
    "About"
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

}
