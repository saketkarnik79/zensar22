import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngifdemo',
  imports: [CommonModule],
  templateUrl: './ngifdemo.html',
  styleUrl: './ngifdemo.css',
})
export class Ngifdemo {
  isLoggedIn: boolean = false;

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  isAdmin: boolean = true;
}