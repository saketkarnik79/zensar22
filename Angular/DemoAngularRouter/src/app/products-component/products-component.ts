import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-products-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './products-component.html',
  styleUrl: './products-component.css',
})
export class ProductsComponent {
  products=[
    {id:1, name: 'Product 1'},
    {id:2, name: 'Product 2'},
    {id:3, name: 'Product 3'}
  ];
}
