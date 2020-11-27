import { Component, Input, OnInit } from '@angular/core';
import { SystemService } from '../core/system.service';
import { Menu } from '../menu/menu.class';
import { User } from '../user/user.class';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})

export class MenuItemComponent implements OnInit {

  // @Input menu-item property can receive value from parent (menu) component
  @Input() menu: Menu;

  constructor() { }

  ngOnInit(): void {

  }

}
