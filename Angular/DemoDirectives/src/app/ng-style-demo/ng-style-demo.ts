import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-ng-style-demo',
  imports: [CommonModule],
  templateUrl: './ng-style-demo.html',
  styleUrl: './ng-style-demo.css',
})
export class NgStyleDemo {
  fontSize: number = 36;
  color: string = 'green';
}
