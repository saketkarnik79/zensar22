import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '../pipes/reverse-pipe';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ReversePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Demo Pipes');
  name: string = 'Angular framework';
  today: Date = new Date();
  price: number = 1234.56;
  completion: number = 0.75;
  cities: string[] = ['New York', 'London', 'Paris', 'Tokyo'];

  // object
  employee = {
    id:101,
    name: 'John Doe',
    age: 30,
    position: 'Software Engineer',
    salary: 75000,
  };
}
