import { Component, OnInit } from '@angular/core';
import { SystemService } from '../core/system.service';
import { User } from '../user/user.class';
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  
  // array of menu items
  menus: Menu[] = [
    new Menu("Home", "/home"),
    new Menu("Users", "/user/list"),
    new Menu("Vendors", "/vendor/list"),
    new Menu("Products", "/product/list"),
    new Menu("Requests", "/request/list"),
    new Menu("Review", "/request/review/list"),
    new Menu("About", "/about"),
  ];

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
