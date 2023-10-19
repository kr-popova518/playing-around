import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/fire-auth/auth.service';

@Component({
  selector: 'app-top-navigation-menu',
  templateUrl: './top-navigation-menu.component.html',
  styleUrls: ['./top-navigation-menu.component.scss']
})

export class TopNavigationMenuComponent implements OnInit {

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
  }
}