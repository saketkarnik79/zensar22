import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details-component',
  imports: [],
  templateUrl: './product-details-component.html',
  styleUrl: './product-details-component.css',
})
export class ProductDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    alert(id);
  }
}
