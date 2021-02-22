import { Component, OnInit } from '@angular/core';

interface MenuItem {
  icon: string;
  text: string;
  url: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  menuItems: MenuItem[];

  constructor() {
    this.menuItems = [
      {
        icon: 'tour',
        text: 'Tours',
        url: 'tours',
      },
      {
        icon: 'person',
        text: 'Users',
        url: 'users',
      },
    ];
  }

  ngOnInit(): void {}
}
