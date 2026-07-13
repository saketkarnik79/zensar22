import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-component',
  imports: [],
  templateUrl: './products-component.html',
  styleUrl: './products-component.css',
})
export class ProductsComponent implements OnInit {
  category!: string;
  page!: number;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.category = params['category'];
      this.page = params['page'];
    });
  }
}
