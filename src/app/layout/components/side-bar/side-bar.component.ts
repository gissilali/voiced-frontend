import {Component, OnInit} from '@angular/core';
import menu from './side-menu.json';
import MenuItem from "../../data/menu-item";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})



export class SideBarComponent implements OnInit {
  menu: MenuItem[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.menu = menu;
  }

}
