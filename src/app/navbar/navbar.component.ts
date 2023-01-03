import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navLinks = [
    { path: 'home', label: 'Home' },
    { path: 'pmethodology', label: 'Project Onboarding' },
    { path: 'catalog', label: 'Project Catalog' },
    { path: 'chart', label: 'Charts' }
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
