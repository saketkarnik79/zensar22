import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-switch-demo',
  imports: [CommonModule],
  templateUrl: './ng-switch-demo.html',
  styleUrl: './ng-switch-demo.css',
})
export class NgSwitchDemo {
  role: string = 'Admin';
}
