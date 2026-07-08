import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Highlight } from '../directives/highlight';

@Component({
  selector: 'app-custom-directive-demo',
  imports: [CommonModule, Highlight],
  templateUrl: './custom-directive-demo.html',
  styleUrl: './custom-directive-demo.css',
})
export class CustomDirectiveDemo {}
