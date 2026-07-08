import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ngifdemo } from './ngifdemo/ngifdemo';
import { NgSwitchDemo } from './ng-switch-demo/ng-switch-demo';
import { NgClassDemo } from './ng-class-demo/ng-class-demo';
import { NgStyleDemo } from './ng-style-demo/ng-style-demo';
import { CustomDirectiveDemo } from './custom-directive-demo/custom-directive-demo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Ngifdemo, NgSwitchDemo, NgClassDemo, NgStyleDemo, CustomDirectiveDemo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DemoDirectives');
}
